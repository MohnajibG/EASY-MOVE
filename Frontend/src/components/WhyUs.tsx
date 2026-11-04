import { motion } from "framer-motion";
import { HeartHandshake, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import packingBox from "../assets/packing-box.jpg";

const pillars = [
  {
    icon: Truck,
    title: "Équipe professionnelle",
    desc: "Des déménageurs formés et expérimentés, qui traitent vos biens comme les leurs.",
  },
  {
    icon: ShieldCheck,
    title: "Transport sécurisé",
    desc: "Véhicules adaptés et arrimage soigné pour un trajet sans accroc.",
  },
  {
    icon: PackageCheck,
    title: "Emballage & manutention",
    desc: "Matériel professionnel et gestes précis pour chaque objet, fragile ou non.",
  },
  {
    icon: HeartHandshake,
    title: "Votre bien, notre priorité",
    desc: "Partout en Algérie, on s'engage sur un service soigné du premier au dernier carton.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const WhyUs = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 rounded-4xl bg-linear-to-br from-brand-green/25 via-brand-cyan/10 to-transparent blur-2xl" />
            <img
              src={packingBox}
              alt="Carton Easy Move prêt pour le déménagement"
              className="w-full rounded-4xl shadow-xl shadow-slate-200"
            />
          </motion.div>

          <div>
            <span className="text-sm font-semibold tracking-wide text-brand-blue uppercase">
              Pourquoi Easy Move
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Le déménagement, sans le stress
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Déménager, c'est stressant. Avec Easy Move, ça ne l'est plus.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {pillars.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-cyan/15 text-brand-blue">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 text-sm font-bold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
