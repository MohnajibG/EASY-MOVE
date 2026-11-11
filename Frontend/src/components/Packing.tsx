import { motion } from "framer-motion";
import { Check } from "lucide-react";
import truckBack from "../assets/truck-back.jpg";
import packingTape from "../assets/packing-tape.jpg";
import { useLanguage } from "../i18n/LanguageContext";

const Packing = () => {
  const { t } = useLanguage();

  return (
    <section id="emballage" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="order-2 grid grid-cols-2 gap-4 lg:order-1"
          >
            <div className="relative col-span-2">
              <div className="absolute -inset-4 -z-10 rounded-4xl bg-linear-to-tr from-brand-green/25 to-brand-cyan/15 blur-2xl" />
              <img
                src={truckBack}
                alt="Easy Move"
                width={1200}
                height={1200}
                loading="lazy"
                className="w-full rounded-4xl shadow-xl shadow-black/10"
              />
            </div>
            <img
              src={packingTape}
              alt="Easy Move"
              width={900}
              height={631}
              loading="lazy"
              className="h-full w-full rounded-2xl object-cover shadow-lg shadow-black/10"
            />
            <div className="flex flex-col justify-center rounded-2xl bg-black p-5 text-white">
              <span className="font-display text-2xl text-brand-cyan">
                {t.packing.statNumber}
              </span>
              <span className="text-xs text-white/60">
                {t.packing.statLabel}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-semibold tracking-wide text-brand-blue uppercase">
              {t.packing.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
              {t.packing.title}
            </h2>
            <p className="mt-5 text-lg text-black/60">{t.packing.subtitle}</p>

            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {t.packing.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green text-black">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-black/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Packing;
