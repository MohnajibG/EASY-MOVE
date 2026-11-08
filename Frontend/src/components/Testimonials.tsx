import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Exemples à remplacer par de vrais avis clients avant la mise en ligne.
const reviews = [
  {
    name: "Sarah",
    city: "Alger",
    text: "Équipe ponctuelle et très soigneuse avec nos meubles. Le prix annoncé n'a pas bougé le jour J.",
  },
  {
    name: "Yacine",
    city: "Oran",
    text: "Déménagement longue distance sans aucun souci. Tout est arrivé en parfait état.",
  },
  {
    name: "Amina",
    city: "Blida",
    text: "Service rapide pour un petit déménagement, prise de rendez-vous facile. Je recommande.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const Testimonials = () => {
  return (
    <section id="temoignages" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold tracking-wide text-brand-blue uppercase">
            Avis clients
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            Ils ont déménagé avec Easy Move
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-black/10 bg-black/10 lg:grid-cols-3"
        >
          {reviews.map((review) => (
            <motion.figure
              key={review.name}
              variants={card}
              whileHover={{ y: -4 }}
              className="bg-white p-7"
            >
              <div className="flex gap-1 text-brand-green">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-black/70">
                "{review.text}"
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-black">
                {review.name}{" "}
                <span className="font-normal text-black/40">
                  — {review.city}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
