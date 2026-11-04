import { motion } from "framer-motion";
import { ShieldCheck, Timer, Warehouse } from "lucide-react";

const points = [
  {
    icon: Warehouse,
    title: "Garde-meuble sécurisé",
    desc: "Vos affaires sont stockées dans un espace surveillé, à l'abri de l'humidité.",
  },
  {
    icon: Timer,
    title: "Courte ou longue durée",
    desc: "Quelques jours ou plusieurs mois, vous gardez le contrôle sur la durée.",
  },
  {
    icon: ShieldCheck,
    title: "Récupération flexible",
    desc: "Nous venons chercher et livrons vos biens au moment qui vous arrange.",
  },
];

const Storage = () => {
  return (
    <section id="stockage" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold tracking-wide text-brand-blue uppercase">
              Stockage
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Besoin de place ? Stockez en toute sérénité
            </h2>
            <p className="mt-5 text-lg text-slate-600">
              Entre deux logements ou pour désencombrer, nous récupérons vos
              biens à domicile et les stockons en lieu sûr aussi longtemps que
              nécessaire.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#devis"
              className="mt-8 inline-flex items-center rounded-full bg-brand-blue px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-blue/20 hover:bg-brand-blue-dark"
            >
              Demander un devis stockage
            </motion.a>
          </motion.div>

          <div className="grid gap-5">
            {points.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/15 text-brand-blue">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Storage;
