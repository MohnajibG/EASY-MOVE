import { motion } from "framer-motion";
import { ArrowRight, MapPin, PhoneCall } from "lucide-react";
import stressSolution from "../assets/brand-pillars.jpg";
import { useLanguage } from "../i18n/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-black pt-32 pb-24 lg:pt-40 lg:pb-28"
    >
      <div className="grid-texture pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />

      {/* animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand-blue opacity-50 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-brand-cyan opacity-25 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-brand-green opacity-15 blur-3xl"
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
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-brand-cyan"
          >
            <MapPin className="h-4 w-4" /> {t.hero.badge}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-6 text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {t.hero.titlePart1}{" "}
            <span className="bg-linear-to-r from-brand-cyan to-brand-green bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-6 max-w-lg text-lg text-white/60"
          >
            {t.hero.subtitle}
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
              className="group inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3.5 text-base font-semibold text-black"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="tel:+213778637433"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-base font-semibold text-white hover:bg-white/10"
            >
              <PhoneCall className="h-4 w-4" />
              <span dir="ltr">07 78 63 74 33</span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-4xl bg-linear-to-br from-brand-blue/50 via-transparent to-brand-cyan/30 blur-2xl" />
          <motion.img
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            src={stressSolution}
            alt={t.hero.imgAlt}
            className="w-full rounded-4xl shadow-2xl shadow-black ring-1 ring-white/10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
