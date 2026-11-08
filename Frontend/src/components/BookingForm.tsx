import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type DragEvent,
} from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Calendar,
  Check,
  ImagePlus,
  Mail,
  MapPin,
  MessageSquare,
  Navigation,
  Phone,
  User,
  X,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { BOOKING_PHOTOS_BUCKET, supabase } from "../lib/supabase";

type FormData = {
  departAdresse: string;
  departEtage: string;
  departAscenseur: "" | "oui" | "non";
  arriveeAdresse: string;
  arriveeEtage: string;
  arriveeAscenseur: "" | "oui" | "non";
  typeBien: string;
  description: string;
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  dateSouhaitee: string;
  message: string;
};

const emptyForm: FormData = {
  departAdresse: "",
  departEtage: "",
  departAscenseur: "",
  arriveeAdresse: "",
  arriveeEtage: "",
  arriveeAscenseur: "",
  typeBien: "",
  description: "",
  nom: "",
  prenom: "",
  telephone: "",
  email: "",
  dateSouhaitee: "",
  message: "",
};

const stepIcons = [MapPin, Navigation, Building2, User];

type Photo = { file: File; url: string };

const AddressStep = ({
  title,
  adresse,
  etage,
  ascenseur,
  onAdresse,
  onEtage,
  onAscenseur,
  placeholder,
}: {
  title: string;
  adresse: string;
  etage: string;
  ascenseur: "" | "oui" | "non";
  onAdresse: (v: string) => void;
  onEtage: (v: string) => void;
  onAscenseur: (v: "oui" | "non") => void;
  placeholder: string;
}) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-5">
      <h3 className="text-xl font-bold text-black">{title}</h3>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-black/50">
          {t.booking.addressLabel}
        </label>
        <input
          type="text"
          value={adresse}
          onChange={(e) => onAdresse(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-black outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-black/50">
          {t.booking.floorLabel}
        </label>
        <select
          value={etage}
          onChange={(e) => onEtage(e.target.value)}
          className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-black outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
        >
          <option value="" disabled>
            {t.booking.floorPlaceholder}
          </option>
          {t.booking.floors.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-black/50">
          {t.booking.elevatorLabel}
        </label>
        <div className="flex gap-3">
          {(["oui", "non"] as const).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => onAscenseur(v)}
              className={`rounded-xl border px-5 py-2.5 text-sm font-semibold capitalize transition-colors ${
                ascenseur === v
                  ? "border-brand-blue bg-brand-blue text-white"
                  : "border-black/10 text-black/60 hover:border-black/20"
              }`}
            >
              {v === "oui" ? t.booking.yes : t.booking.no}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const BookingForm = () => {
  const { t, lang } = useLanguage();
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [data, setData] = useState<FormData>(emptyForm);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const photosRef = useRef<Photo[]>([]);
  photosRef.current = photos;

  useEffect(() => {
    return () => {
      photosRef.current.forEach((p) => URL.revokeObjectURL(p.url));
    };
  }, []);

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const addPhotos = (files: FileList | null) => {
    if (!files) return;
    const next = Array.from(files)
      .filter((f) => f.type.startsWith("image/"))
      .slice(0, 8 - photos.length)
      .map((file) => ({ file, url: URL.createObjectURL(file) }));
    setPhotos((p) => [...p, ...next]);
  };

  const removePhoto = (url: string) => {
    URL.revokeObjectURL(url);
    setPhotos((p) => p.filter((photo) => photo.url !== url));
  };

  const onFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    addPhotos(e.target.files);
    e.target.value = "";
  };

  const onDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragActive(false);
    addPhotos(e.dataTransfer.files);
  };

  const isStepValid = (s: number) => {
    if (s === 0)
      return data.departAdresse.trim() !== "" && data.departEtage !== "";
    if (s === 1)
      return data.arriveeAdresse.trim() !== "" && data.arriveeEtage !== "";
    if (s === 2) return data.typeBien !== "";
    if (s === 3)
      return (
        data.nom.trim() !== "" &&
        data.prenom.trim() !== "" &&
        data.telephone.trim() !== "" &&
        data.email.trim() !== "" &&
        data.dateSouhaitee !== ""
      );
    return true;
  };

  const steps = t.booking.stepLabels.map((label, i) => ({
    label,
    icon: stepIcons[i],
  }));

  const submitBooking = async () => {
    if (!supabase) {
      console.error(
        "Supabase n'est pas configuré : ajoute VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY dans .env.local",
      );
      setSubmitError(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const photoUrls: string[] = [];
      for (const photo of photos) {
        const ext = photo.file.name.split(".").pop() ?? "jpg";
        const path = `${crypto.randomUUID()}.${ext}`;
        const { error: uploadError } = await supabase.storage
          .from(BOOKING_PHOTOS_BUCKET)
          .upload(path, photo.file);
        if (uploadError) throw uploadError;

        const { data: publicUrl } = supabase.storage
          .from(BOOKING_PHOTOS_BUCKET)
          .getPublicUrl(path);
        photoUrls.push(publicUrl.publicUrl);
      }

      const { error: insertError } = await supabase
        .from("booking_requests")
        .insert({
          lang,
          depart_adresse: data.departAdresse,
          depart_etage: data.departEtage,
          depart_ascenseur: data.departAscenseur || null,
          arrivee_adresse: data.arriveeAdresse,
          arrivee_etage: data.arriveeEtage,
          arrivee_ascenseur: data.arriveeAscenseur || null,
          type_bien: data.typeBien,
          description: data.description || null,
          photos: photoUrls,
          prenom: data.prenom,
          nom: data.nom,
          telephone: data.telephone,
          email: data.email,
          date_souhaitee: data.dateSouhaitee,
          message: data.message || null,
        });
      if (insertError) throw insertError;

      setSubmitted(true);
    } catch (err) {
      console.error("Échec de l'envoi du formulaire :", err);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const goNext = () => {
    if (!isStepValid(step)) {
      setShowErrors(true);
      return;
    }
    setShowErrors(false);
    if (step === steps.length - 1) {
      submitBooking();
      return;
    }
    setDirection(1);
    setStep((s) => s + 1);
  };

  const goBack = () => {
    setShowErrors(false);
    setDirection(-1);
    setStep((s) => Math.max(0, s - 1));
  };

  const inputClass =
    "w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-black outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20";
  const labelClass = "mb-1.5 block text-xs font-semibold text-black/50";

  return (
    <section id="devis" className="relative bg-black px-5 pb-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl"
      >
        <div className="mb-8 text-center">
          <span className="text-sm font-semibold tracking-wide text-brand-cyan uppercase">
            {t.booking.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t.booking.title}
          </h2>
          <p className="mt-3 text-white/60">{t.booking.subtitle}</p>
        </div>

        <div className="overflow-hidden rounded-4xl bg-white shadow-2xl shadow-black">
          {!submitted ? (
            <>
              {/* stepper */}
              <div className="flex items-center gap-2 border-b border-black/10 px-6 py-5 sm:gap-4 sm:px-10">
                {steps.map((s, i) => (
                  <div
                    key={s.label}
                    className="flex flex-1 items-center gap-2 sm:gap-4"
                  >
                    <div className="flex flex-col items-center gap-1.5">
                      <motion.div
                        animate={{
                          backgroundColor:
                            i < step
                              ? "#1b1aff"
                              : i === step
                                ? "#1b1aff"
                                : "#f4f4f5",
                          scale: i === step ? 1.1 : 1,
                        }}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                      >
                        {i < step ? (
                          <Check className="h-4 w-4 text-white" />
                        ) : (
                          <s.icon
                            className={`h-4 w-4 ${i === step ? "text-white" : "text-black/40"}`}
                          />
                        )}
                      </motion.div>
                      <span
                        className={`hidden text-[11px] font-semibold sm:block ${
                          i === step ? "text-black" : "text-black/40"
                        }`}
                      >
                        {s.label}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-black/10">
                        <motion.div
                          animate={{ width: i < step ? "100%" : "0%" }}
                          transition={{ duration: 0.4 }}
                          className="h-full bg-brand-blue"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* step content */}
              <div className="relative min-h-90 overflow-hidden px-6 py-8 sm:px-10">
                <motion.div
                  key={step}
                  initial={{ x: direction * 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {step === 0 && (
                    <AddressStep
                      title={t.booking.step0Title}
                      adresse={data.departAdresse}
                      etage={data.departEtage}
                      ascenseur={data.departAscenseur}
                      onAdresse={(v) => set("departAdresse", v)}
                      onEtage={(v) => set("departEtage", v)}
                      onAscenseur={(v) => set("departAscenseur", v)}
                      placeholder={t.booking.addressPlaceholder}
                    />
                  )}

                  {step === 1 && (
                    <AddressStep
                      title={t.booking.step1Title}
                      adresse={data.arriveeAdresse}
                      etage={data.arriveeEtage}
                      ascenseur={data.arriveeAscenseur}
                      onAdresse={(v) => set("arriveeAdresse", v)}
                      onEtage={(v) => set("arriveeEtage", v)}
                      onAscenseur={(v) => set("arriveeAscenseur", v)}
                      placeholder={t.booking.addressPlaceholder}
                    />
                  )}

                  {step === 2 && (
                    <div className="space-y-5">
                      <h3 className="text-xl font-bold text-black">
                        {t.booking.step2Title}
                      </h3>

                      <div>
                        <label className={labelClass}>
                          {t.booking.bienTypeLabel}
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {t.booking.bienTypes.map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => set("typeBien", type)}
                              className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                                data.typeBien === type
                                  ? "border-brand-blue bg-brand-blue text-white"
                                  : "border-black/10 text-black/60 hover:border-black/20"
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>
                          {t.booking.descLabel}
                        </label>
                        <textarea
                          value={data.description}
                          onChange={(e) => set("description", e.target.value)}
                          rows={3}
                          placeholder={t.booking.descPlaceholder}
                          className={`${inputClass} resize-none`}
                        />
                      </div>

                      <div>
                        <label className={labelClass}>
                          {t.booking.photosLabel}
                        </label>
                        <label
                          htmlFor="photos"
                          onDragOver={(e) => {
                            e.preventDefault();
                            setDragActive(true);
                          }}
                          onDragLeave={() => setDragActive(false)}
                          onDrop={onDrop}
                          className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed px-4 py-8 text-center transition-colors ${
                            dragActive
                              ? "border-brand-blue bg-brand-blue/5"
                              : "border-black/15 hover:border-black/30"
                          }`}
                        >
                          <ImagePlus className="h-6 w-6 text-black/40" />
                          <p className="text-xs text-black/50">
                            {t.booking.dropzoneText}{" "}
                            <span className="font-semibold text-brand-blue">
                              {t.booking.browseText}
                            </span>{" "}
                            {t.booking.maxPhotos}
                          </p>
                          <input
                            id="photos"
                            type="file"
                            accept="image/*"
                            multiple
                            className="hidden"
                            onChange={onFileInput}
                          />
                        </label>

                        {photos.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {photos.map((p) => (
                              <div
                                key={p.url}
                                className="group relative h-16 w-16"
                              >
                                <img
                                  src={p.url}
                                  alt=""
                                  className="h-full w-full rounded-lg object-cover"
                                />
                                <button
                                  type="button"
                                  onClick={() => removePhoto(p.url)}
                                  className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-black text-white"
                                  aria-label={t.booking.removePhotoAria}
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-5">
                      <h3 className="text-xl font-bold text-black">
                        {t.booking.step3Title}
                      </h3>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label className={labelClass}>
                            {t.booking.prenomLabel}
                          </label>
                          <input
                            type="text"
                            value={data.prenom}
                            onChange={(e) => set("prenom", e.target.value)}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>
                            {t.booking.nomLabel}
                          </label>
                          <input
                            type="text"
                            value={data.nom}
                            onChange={(e) => set("nom", e.target.value)}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>
                            <Phone className="me-1 inline h-3 w-3" />
                            {t.booking.telLabel}
                          </label>
                          <input
                            type="tel"
                            value={data.telephone}
                            onChange={(e) => set("telephone", e.target.value)}
                            placeholder={t.booking.telPlaceholder}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>
                            <Mail className="me-1 inline h-3 w-3" />
                            {t.booking.emailLabel}
                          </label>
                          <input
                            type="email"
                            value={data.email}
                            onChange={(e) => set("email", e.target.value)}
                            placeholder={t.booking.emailPlaceholder}
                            className={inputClass}
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label className={labelClass}>
                            <Calendar className="me-1 inline h-3 w-3" />
                            {t.booking.dateLabel}
                          </label>
                          <input
                            type="date"
                            value={data.dateSouhaitee}
                            onChange={(e) =>
                              set("dateSouhaitee", e.target.value)
                            }
                            className={inputClass}
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label className={labelClass}>
                            <MessageSquare className="me-1 inline h-3 w-3" />
                            {t.booking.messageLabel}
                          </label>
                          <textarea
                            value={data.message}
                            onChange={(e) => set("message", e.target.value)}
                            rows={2}
                            placeholder={t.booking.messagePlaceholder}
                            className={`${inputClass} resize-none`}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>

                {showErrors && !isStepValid(step) && (
                  <p className="mt-4 text-xs font-medium text-red-600">
                    {t.booking.errorMsg}
                  </p>
                )}
                {submitError && (
                  <p className="mt-4 text-xs font-medium text-red-600">
                    {t.booking.submitError}
                  </p>
                )}
              </div>

              {/* navigation */}
              <div className="flex items-center justify-between border-t border-black/10 px-6 py-5 sm:px-10">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={step === 0 || isSubmitting}
                  className="flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold text-black/60 transition-opacity disabled:opacity-0"
                >
                  <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
                  {t.booking.backBtn}
                </button>

                <motion.button
                  whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
                  type="button"
                  onClick={goNext}
                  disabled={isSubmitting}
                  className={`flex items-center gap-1.5 rounded-full px-6 py-3 text-sm font-semibold disabled:opacity-70 ${
                    step === steps.length - 1
                      ? "bg-brand-green text-black"
                      : "bg-brand-blue text-white"
                  }`}
                >
                  {step === steps.length - 1
                    ? isSubmitting
                      ? t.booking.submittingBtn
                      : t.booking.submitBtn
                    : t.booking.nextBtn}
                  {!isSubmitting && (
                    <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                  )}
                </motion.button>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 px-10 py-20 text-center"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-green"
              >
                <Check className="h-8 w-8 text-black" />
              </motion.span>
              <h3 className="text-2xl font-bold text-black">
                {t.booking.successTitle}
              </h3>
              <p className="max-w-sm text-black/60">
                {t.booking.successMsg(data.prenom, data.telephone)}
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default BookingForm;
