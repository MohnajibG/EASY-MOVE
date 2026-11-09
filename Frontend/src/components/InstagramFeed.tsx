import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const ELFSIGHT_SCRIPT_SRC = "https://elfsightcdn.com/platform.js";
const widgetId = import.meta.env.VITE_ELFSIGHT_INSTAGRAM_WIDGET_ID as
  | string
  | undefined;

const InstagramFeed = () => {
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
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold tracking-wide text-brand-cyan uppercase">
            {t.instagramFeed.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t.instagramFeed.title}
          </h2>
          <p className="mt-4 text-lg text-white/60">
            {t.instagramFeed.subtitle}
          </p>
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
            <p className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center text-sm text-white/40">
              {t.instagramFeed.notConfigured}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;
