import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Combien coûte un déménagement avec Easy Move ?",
    a: "Le prix dépend du volume, de la distance et du type de déménagement. Remplissez le formulaire de devis pour recevoir un tarif fixe et gratuit sous peu.",
  },
  {
    q: "Dans quelles villes intervenez-vous ?",
    a: "Nous intervenons à Alger et dans toute l'Algérie, y compris pour les déménagements longue distance entre wilayas.",
  },
  {
    q: "Fournissez-vous les cartons et le matériel d'emballage ?",
    a: "Oui, notre équipe apporte tout le matériel nécessaire : cartons, housses, film plastique et protections pour meubles.",
  },
  {
    q: "Le prix peut-il changer le jour du déménagement ?",
    a: "Non. Une fois votre devis validé, le prix est fixe et ne change pas, même si le chargement prend plus de temps que prévu.",
  },
  {
    q: "Proposez-vous un service de stockage ?",
    a: "Oui, nous proposons une solution de stockage sécurisé à court ou long terme, avec récupération et livraison à votre convenance.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold tracking-wide text-brand-blue uppercase">
            Questions fréquentes
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            Tout ce que vous devez savoir
          </h2>
        </motion.div>

        <div className="mt-12 divide-y divide-black/10 rounded-2xl border border-black/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.q} className="px-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-semibold text-black">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-5 w-5 shrink-0 text-brand-blue" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-black/60">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
