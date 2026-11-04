import { motion } from "framer-motion";
import { BadgeCheck, CalendarClock, MapPinned, Timer } from "lucide-react";

const badges = [
  { icon: Timer, label: "Devis en 2 minutes" },
  { icon: BadgeCheck, label: "Prix fixe garanti" },
  { icon: CalendarClock, label: "Disponible 7j/7" },
  { icon: MapPinned, label: "Partout en Algérie" },
];

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
  return (
    <section className="bg-white px-5 py-12 lg:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto grid max-w-5xl grid-cols-2 gap-3 rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-100 sm:grid-cols-4 sm:gap-4 sm:p-6"
      >
        {badges.map(({ icon: Icon, label }) => (
          <motion.div
            key={label}
            variants={item}
            className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-xs font-semibold text-slate-700 sm:text-sm">
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TrustBar;
