import { useState } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { languages } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";

const LanguageSwitcher = ({ dark = true }: { dark?: boolean }) => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
          dark
            ? "border-white/15 text-white/80 hover:bg-white/10"
            : "border-black/10 text-black/70 hover:bg-black/5"
        }`}
      >
        <Globe className="h-3.5 w-3.5" />
        {languages.find((l) => l.code === lang)?.label}
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute end-0 z-50 mt-2 overflow-hidden rounded-xl border border-black/10 bg-white py-1 shadow-xl"
          >
            {languages.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`block w-full px-4 py-2 text-start text-sm font-medium transition-colors ${
                  lang === l.code
                    ? "bg-brand-blue/10 text-brand-blue"
                    : "text-black/70 hover:bg-black/5"
                }`}
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;
