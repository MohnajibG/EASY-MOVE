import { motion } from "framer-motion";
import {
  Building2,
  Clock,
  Home,
  PackageSearch,
  Route,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Déménagement résidentiel",
    desc: "Appartement ou maison, nous prenons soin de chaque meuble et carton du départ à l'arrivée.",
  },
  {
    icon: Building2,
    title: "Bureaux & entreprises",
    desc: "Déménagement professionnel organisé pour limiter l'arrêt de votre activité.",
  },
  {
    icon: Route,
    title: "Longue distance",
    desc: "D'une wilaya à l'autre, votre déménagement est planifié et suivi de bout en bout.",
  },
  {
    icon: PackageSearch,
    title: "Petits déménagements",
    desc: "Studio, quelques meubles ou objets volumineux : un service adapté, sans minimum.",
  },
  {
    icon: Clock,
    title: "Service rapide",
    desc: "Besoin de déménager vite ? Nous nous organisons pour intervenir dans les meilleurs délais.",
  },
  {
    icon: Truck,
    title: "Transport sécurisé",
    desc: "Véhicules équipés et équipe formée pour un transport sans dommage.",
  },
];

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
            Nos services
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Tout ce qu'il faut pour déménager l'esprit tranquille
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Quel que soit votre besoin, notre équipe s'occupe de tout, de A à
            Z.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={card}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-slate-100 bg-slate-50/60 p-7 transition-colors duration-300 hover:border-brand-blue/20 hover:bg-white hover:shadow-xl hover:shadow-brand-blue/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
