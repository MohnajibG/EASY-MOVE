import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const ELFSIGHT_SCRIPT_SRC = "https://elfsightcdn.com/platform.js";
const widgetId = import.meta.env.VITE_ELFSIGHT_REVIEWS_WIDGET_ID as
  | string
  | undefined;

const GoogleReviews = () => {
  const { t } = useLanguage();

  useEffect(() => {
    if (!widgetId) return;
    if (document.querySelector(`script[src="${ELFSIGHT_SCRIPT_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = ELFSIGHT_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="temoignages" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold tracking-wide text-brand-blue uppercase">
            {t.reviews.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            {t.reviews.title}
          </h2>
          <p className="mt-4 text-lg text-black/60">{t.reviews.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12"
        >
          {widgetId ? (
            <div className={`elfsight-app-${widgetId}`} data-elfsight-app-lazy />
          ) : (
            <p className="rounded-2xl border border-black/10 bg-black/[0.02] p-8 text-center text-sm text-black/40">
              {t.reviews.notConfigured}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviews;
