import { motion } from "framer-motion";
import {
  Building2,
  Clock,
  Home,
  PackageSearch,
  Route,
  Truck,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const icons = [Home, Building2, Route, PackageSearch, Clock, Truck];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold tracking-wide text-brand-blue uppercase">
            {t.services.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-black/60">{t.services.subtitle}</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {t.services.items.map(({ title, desc }, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={title}
                variants={card}
                className="group bg-white p-7 transition-colors duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue transition-colors group-hover:bg-brand-green group-hover:text-black">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-black">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/60">
                  {desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
