import { motion } from "framer-motion";
import truckHero from "../assets/truck-hero.jpg";
import truckBack from "../assets/truck-back.jpg";
import packingTape from "../assets/packing-tape.jpg";
import logoLockup from "../assets/logo-lockup-dark.jpg";
import ladderTruck from "../assets/ladder-truck.jpg";
import { useLanguage } from "../i18n/LanguageContext";

const sources = [truckHero, packingTape, logoLockup, truckBack, ladderTruck];
const spans = ["sm:col-span-2 sm:row-span-2", "", "", "", ""];

const Gallery = () => {
  const { t } = useLanguage();

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
            {t.gallery.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t.gallery.title}
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {t.gallery.alts.map((alt, i) => (
            <motion.div
              key={alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className={`group relative overflow-hidden rounded-2xl ring-1 ring-white/10 ${spans[i]}`}
            >
              <img
                src={sources[i]}
                alt={alt}
                className="h-full min-h-40 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
