import { motion } from "framer-motion";
import { ShieldCheck, Timer, Warehouse } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const icons = [Warehouse, Timer, ShieldCheck];

const Storage = () => {
  const { t } = useLanguage();

  return (
    <section id="stockage" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold tracking-wide text-brand-blue uppercase">
              {t.storage.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
              {t.storage.title}
            </h2>
            <p className="mt-5 text-lg text-black/60">{t.storage.subtitle}</p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="/#devis"
              className="mt-8 inline-flex items-center rounded-full bg-brand-blue px-6 py-3.5 text-base font-semibold text-white hover:bg-brand-blue/90"
            >
              {t.storage.cta}
            </motion.a>
          </motion.div>

          <div className="grid gap-5">
            {t.storage.points.map(({ title, desc }, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl border border-black/10 bg-white p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/20 text-brand-blue">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black">{title}</h3>
                    <p className="mt-1 text-sm text-black/60">{desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Storage;
