import { motion } from "framer-motion";
import { BadgeCheck, CalendarClock, MapPinned, Timer } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const icons = [Timer, BadgeCheck, CalendarClock, MapPinned];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const TrustBar = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-black px-5 pb-20 lg:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-4"
      >
        {t.trustbar.items.map((label, i) => {
          const Icon = icons[i];
          return (
          <motion.div
            key={label}
            variants={item}
            className="flex flex-col items-center gap-2 bg-black px-4 py-6 text-center"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/20 text-brand-cyan">
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-xs font-semibold text-white/80 sm:text-sm">
              {label}
            </span>
          </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default TrustBar;
