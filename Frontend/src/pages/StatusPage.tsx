import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Construction,
  RotateCcw,
  SearchX,
  SatelliteDish,
} from "lucide-react";
import logo from "../assets/logo-mark.png";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useLanguage } from "../i18n/LanguageContext";

type Variant = "notFound" | "error" | "construction";

const icons = {
  notFound: SearchX,
  error: SatelliteDish,
  construction: Construction,
};

const StatusPage = ({ variant }: { variant: Variant }) => {
  const { t } = useLanguage();
  const copy = t.status[variant];
  const Icon = icons[variant];

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-black">
      <div className="grid-texture pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />

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

      <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Easy Move" className="h-9 w-9 rounded-lg" />
          <span className="font-display text-lg text-white">
            Easy<span className="text-brand-cyan">Move</span>
          </span>
        </Link>
        <LanguageSwitcher dark />
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-16 text-center">
        {variant === "notFound" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-linear-to-r from-brand-cyan to-brand-green bg-clip-text text-8xl font-extrabold text-transparent sm:text-9xl"
          >
            404
          </motion.span>
        )}

        {variant === "construction" && (
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-brand-cyan"
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-brand-green"
            />
            {t.status.construction.badge}
          </motion.span>
        )}

        <motion.div
          animate={
            variant === "error"
              ? { rotate: [0, -6, 6, -6, 0] }
              : { y: [0, -14, 0] }
          }
          transition={
            variant === "error"
              ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
              : { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }
          className={`relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-white/5 ${
            variant === "notFound" ? "mt-6" : ""
          }`}
        >
          <Icon className="h-11 w-11 text-brand-cyan" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 max-w-xl text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
        >
          {copy.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-4 max-w-md text-base text-white/60"
        >
          {copy.subtitle}
        </motion.p>

        {variant === "construction" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-8 h-2 w-56 overflow-hidden rounded-full bg-white/10"
          >
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-1/2 rounded-full bg-linear-to-r from-brand-blue via-brand-cyan to-brand-green"
            />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {variant === "error" && (
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              <RotateCcw className="h-4 w-4" />
              {t.status.error.retry}
            </button>
          )}
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-black"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
            {copy.cta}
          </Link>
        </motion.div>
      </main>
    </div>
  );
};

export default StatusPage;
