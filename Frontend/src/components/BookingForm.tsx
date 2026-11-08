import { useEffect, useRef, useState, type ChangeEvent, type DragEvent } from "react";
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

const floors = [
  "Rez-de-chaussée",
  "1er étage",
  "2e étage",
  "3e étage",
  "4e étage",
  "5e étage",
  "6e étage",
  "7e étage",
  "8e étage",
  "9e étage",
  "10e étage ou +",
];

const bienTypes = [
  "Studio / F1",
  "F2",
  "F3",
  "F4",
  "F5 et +",
  "Maison",
  "Bureau",
  "Autre",
];

const steps = [
  { label: "Départ", icon: MapPin },
  { label: "Arrivée", icon: Navigation },
  { label: "À déménager", icon: Building2 },
  { label: "Vos infos", icon: User },
];

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
}) => (
  <div className="space-y-5">
    <h3 className="text-xl font-bold text-black">{title}</h3>

    <div>
      <label className="mb-1.5 block text-xs font-semibold text-black/50">
        Adresse *
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
        Étage *
      </label>
      <select
        value={etage}
        onChange={(e) => onEtage(e.target.value)}
        className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-black outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
      >
        <option value="" disabled>
          Choisir un étage
        </option>
        {floors.map((f) => (
          <option key={f}>{f}</option>
        ))}
      </select>
    </div>

    <div>
      <label className="mb-1.5 block text-xs font-semibold text-black/50">
        Ascenseur disponible ?
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
            {v}
          </button>
        ))}
      </div>
    </div>
  </div>
);

const BookingForm = () => {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [data, setData] = useState<FormData>(emptyForm);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [submitted, setSubmitted] = useState(false);
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
    if (s === 0) return data.departAdresse.trim() !== "" && data.departEtage !== "";
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

  const goNext = () => {
    if (!isStepValid(step)) {
      setShowErrors(true);
      return;
    }
    setShowErrors(false);
    if (step === steps.length - 1) {
      setSubmitted(true);
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
            Devis gratuit
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Votre déménagement en 4 étapes
          </h2>
          <p className="mt-3 text-white/60">
            2 minutes suffisent, c'est gratuit et sans engagement.
          </p>
        </div>

        <div className="overflow-hidden rounded-4xl bg-white shadow-2xl shadow-black">
          {!submitted ? (
            <>
              {/* stepper */}
              <div className="flex items-center gap-2 border-b border-black/10 px-6 py-5 sm:gap-4 sm:px-10">
                {steps.map((s, i) => (
                  <div key={s.label} className="flex flex-1 items-center gap-2 sm:gap-4">
                    <div className="flex flex-col items-center gap-1.5">
                      <motion.div
                        animate={{
                          backgroundColor:
                            i < step ? "#1b1aff" : i === step ? "#1b1aff" : "#f4f4f5",
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
              <div className="relative min-h-[360px] overflow-hidden px-6 py-8 sm:px-10">
                <motion.div
                  key={step}
                  initial={{ x: direction * 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    {step === 0 && (
                      <AddressStep
                        title="D'où partez-vous ?"
                        adresse={data.departAdresse}
                        etage={data.departEtage}
                        ascenseur={data.departAscenseur}
                        onAdresse={(v) => set("departAdresse", v)}
                        onEtage={(v) => set("departEtage", v)}
                        onAscenseur={(v) => set("departAscenseur", v)}
                        placeholder="Ville, quartier, rue..."
                      />
                    )}

                    {step === 1 && (
                      <AddressStep
                        title="Où emménagez-vous ?"
                        adresse={data.arriveeAdresse}
                        etage={data.arriveeEtage}
                        ascenseur={data.arriveeAscenseur}
                        onAdresse={(v) => set("arriveeAdresse", v)}
                        onEtage={(v) => set("arriveeEtage", v)}
                        onAscenseur={(v) => set("arriveeAscenseur", v)}
                        placeholder="Ville, quartier, rue..."
                      />
                    )}

                    {step === 2 && (
                      <div className="space-y-5">
                        <h3 className="text-xl font-bold text-black">
                          Qu'y a-t-il à déménager ?
                        </h3>

                        <div>
                          <label className={labelClass}>
                            Type de bien *
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {bienTypes.map((type) => (
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
                            Décrivez ce qu'il faut déménager
                          </label>
                          <textarea
                            value={data.description}
                            onChange={(e) => set("description", e.target.value)}
                            rows={3}
                            placeholder="Ex : salon complet, 2 chambres, électroménager, pas d'objets fragiles particuliers..."
                            className={`${inputClass} resize-none`}
                          />
                        </div>

                        <div>
                          <label className={labelClass}>
                            Photos pour estimer le volume (optionnel)
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
                              Glissez vos photos ici ou{" "}
                              <span className="font-semibold text-brand-blue">
                                parcourir
                              </span>{" "}
                              (8 max)
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
                                <div key={p.url} className="group relative h-16 w-16">
                                  <img
                                    src={p.url}
                                    alt=""
                                    className="h-full w-full rounded-lg object-cover"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => removePhoto(p.url)}
                                    className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-black text-white"
                                    aria-label="Retirer la photo"
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
                          Vos informations
                        </h3>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div>
                            <label className={labelClass}>Prénom *</label>
                            <input
                              type="text"
                              value={data.prenom}
                              onChange={(e) => set("prenom", e.target.value)}
                              className={inputClass}
                            />
                          </div>
                          <div>
                            <label className={labelClass}>Nom *</label>
                            <input
                              type="text"
                              value={data.nom}
                              onChange={(e) => set("nom", e.target.value)}
                              className={inputClass}
                            />
                          </div>
                          <div>
                            <label className={labelClass}>
                              <Phone className="mr-1 inline h-3 w-3" />
                              Téléphone *
                            </label>
                            <input
                              type="tel"
                              value={data.telephone}
                              onChange={(e) => set("telephone", e.target.value)}
                              placeholder="05 XX XX XX XX"
                              className={inputClass}
                            />
                          </div>
                          <div>
                            <label className={labelClass}>
                              <Mail className="mr-1 inline h-3 w-3" />
                              Email *
                            </label>
                            <input
                              type="email"
                              value={data.email}
                              onChange={(e) => set("email", e.target.value)}
                              placeholder="vous@email.com"
                              className={inputClass}
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <label className={labelClass}>
                              <Calendar className="mr-1 inline h-3 w-3" />
                              Date souhaitée *
                            </label>
                            <input
                              type="date"
                              value={data.dateSouhaitee}
                              onChange={(e) => set("dateSouhaitee", e.target.value)}
                              className={inputClass}
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <label className={labelClass}>
                              <MessageSquare className="mr-1 inline h-3 w-3" />
                              Message (optionnel)
                            </label>
                            <textarea
                              value={data.message}
                              onChange={(e) => set("message", e.target.value)}
                              rows={2}
                              placeholder="Une précision à nous donner ?"
                              className={`${inputClass} resize-none`}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                </motion.div>

                {showErrors && !isStepValid(step) && (
                  <p className="mt-4 text-xs font-medium text-red-600">
                    Merci de remplir les champs marqués d'un *.
                  </p>
                )}
              </div>

              {/* navigation */}
              <div className="flex items-center justify-between border-t border-black/10 px-6 py-5 sm:px-10">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={step === 0}
                  className="flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold text-black/60 transition-opacity disabled:opacity-0"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Précédent
                </button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={goNext}
                  className={`flex items-center gap-1.5 rounded-full px-6 py-3 text-sm font-semibold ${
                    step === steps.length - 1
                      ? "bg-brand-green text-black"
                      : "bg-brand-blue text-white"
                  }`}
                >
                  {step === steps.length - 1 ? "Envoyer ma demande" : "Suivant"}
                  <ArrowRight className="h-4 w-4" />
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
                Demande envoyée !
              </h3>
              <p className="max-w-sm text-black/60">
                Merci {data.prenom}, nous avons bien reçu votre demande de
                devis. Notre équipe vous recontacte très vite au{" "}
                {data.telephone}.
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default BookingForm;
