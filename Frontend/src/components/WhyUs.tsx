import { motion } from "framer-motion";
import { HeartHandshake, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import packingBox from "../assets/packing-box.jpg";
import { useLanguage } from "../i18n/LanguageContext";

const icons = [Truck, ShieldCheck, PackageCheck, HeartHandshake];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const WhyUs = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-black py-24">
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_20%_40%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 rounded-4xl bg-linear-to-br from-brand-green/30 via-brand-cyan/15 to-transparent blur-2xl" />
            <img
              src={packingBox}
              alt="Easy Move"
              className="w-full rounded-4xl shadow-2xl shadow-black ring-1 ring-white/10"
            />
          </motion.div>

          <div>
            <span className="text-sm font-semibold tracking-wide text-brand-cyan uppercase">
              {t.whyUs.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {t.whyUs.title}
            </h2>
            <p className="mt-4 text-lg text-white/60">{t.whyUs.subtitle}</p>

            <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {t.whyUs.pillars.map(({ title, desc }, i) => {
                const Icon = icons[i];
                return (
                  <motion.div
                    key={title}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                    className="bg-black p-5"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/20 text-brand-cyan">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-3 text-sm font-bold text-white">
                      {title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-white/50">
                      {desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
