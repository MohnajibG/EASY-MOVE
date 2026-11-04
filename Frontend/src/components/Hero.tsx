import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, PhoneCall } from "lucide-react";
import truck from "../assets/truck-hero.jpg";

const moveTypes = [
  "Appartement",
  "Maison",
  "Bureau / Entreprise",
  "Petit déménagement",
  "Autre",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Hero = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-slate-950 pt-32 pb-28 lg:pt-40 lg:pb-36"
    >
      {/* animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand-blue opacity-40 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-brand-cyan opacity-20 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-brand-green opacity-10 blur-3xl"
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-brand-cyan ring-1 ring-white/20"
          >
            <MapPin className="h-4 w-4" /> Partout en Algérie
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-6 text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Votre déménagement,{" "}
            <span className="bg-linear-to-r from-brand-cyan to-brand-green bg-clip-text text-transparent">
              en toute facilité
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-6 max-w-lg text-lg text-slate-300"
          >
            Équipe professionnelle, transport sécurisé et emballage soigné.
            Votre bien, notre priorité — où que vous alliez en Algérie.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#devis"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-brand-green/20"
            >
              Obtenir un devis gratuit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="tel:0778637433"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold text-white ring-1 ring-white/20 hover:bg-white/10"
            >
              <PhoneCall className="h-4 w-4" />
              07 78 63 74 33
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-4xl bg-linear-to-br from-brand-blue/40 via-transparent to-brand-cyan/20 blur-2xl" />
          <motion.img
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            src={truck}
            alt="Camion Easy Move"
            className="w-full rounded-4xl shadow-2xl shadow-black/40 ring-1 ring-white/10"
          />
        </motion.div>
      </div>

      {/* quote form */}
      <motion.div
        id="devis"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto mt-16 max-w-5xl px-5 lg:px-8"
      >
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 rounded-3xl bg-white p-6 shadow-2xl shadow-black/30 sm:grid-cols-2 lg:grid-cols-5 lg:items-end lg:gap-3 lg:p-5"
        >
          <div className="lg:col-span-1">
            <label className="mb-1.5 block text-xs font-semibold text-slate-500">
              Date souhaitée
            </label>
            <input
              type="date"
              required
              className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            />
          </div>

          <div className="lg:col-span-1">
            <label className="mb-1.5 block text-xs font-semibold text-slate-500">
              Type de déménagement
            </label>
            <select
              required
              defaultValue=""
              className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            >
              <option value="" disabled>
                Choisir
              </option>
              {moveTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="lg:col-span-1">
            <label className="mb-1.5 block text-xs font-semibold text-slate-500">
              Adresse de départ
            </label>
            <input
              type="text"
              placeholder="Ville, quartier"
              required
              className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            />
          </div>

          <div className="lg:col-span-1">
            <label className="mb-1.5 block text-xs font-semibold text-slate-500">
              Adresse d'arrivée
            </label>
            <input
              type="text"
              placeholder="Ville, quartier"
              required
              className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="rounded-xl bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 hover:bg-brand-blue-dark lg:col-span-1"
          >
            Obtenir mon devis
          </motion.button>

          {sent && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-medium text-emerald-600 sm:col-span-2 lg:col-span-5"
            >
              Merci ! Votre demande a été enregistrée, nous vous recontactons
              très vite.
            </motion.p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Hero;
