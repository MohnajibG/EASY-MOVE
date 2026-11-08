import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const included = [
  "Devis ferme avant le jour J",
  "Main d'œuvre et carburant inclus",
  "Protection de vos meubles",
  "Protection murs, sols et portes",
  "Aucun frais caché, jamais",
];

const Pricing = () => {
  return (
    <section
      id="tarifs"
      className="relative overflow-hidden bg-brand-blue py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-cyan opacity-25 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-brand-green opacity-15 blur-3xl"
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold tracking-wide text-brand-cyan uppercase">
            Tarification
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Un prix fixe, sans surprise
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Nous vous donnons un tarif garanti avant le jour de votre
            déménagement. La durée du chargement ne change rien au prix
            annoncé.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#devis"
            className="mt-8 inline-flex items-center rounded-full bg-brand-green px-6 py-3.5 text-base font-semibold text-black"
          >
            Demander mon prix fixe
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/15 bg-black/20 p-8 backdrop-blur-sm"
        >
          <p className="text-sm font-semibold text-brand-cyan">
            Toujours inclus dans votre devis
          </p>
          <ul className="mt-5 space-y-4">
            {included.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                <span className="text-base text-white">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
