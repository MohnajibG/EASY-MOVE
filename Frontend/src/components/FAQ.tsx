import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    q: 'Combien coûte un déménagement avec Easy Move ?',
    a: 'Le prix dépend du volume, de la distance et du type de déménagement. Remplissez le formulaire de devis pour recevoir un tarif fixe et gratuit sous peu.',
  },
  {
    q: 'Dans quelles villes intervenez-vous ?',
    a: 'Nous intervenons à Alger et dans toute l\'Algérie, y compris pour les déménagements longue distance entre wilayas.',
  },
  {
    q: 'Fournissez-vous les cartons et le matériel d\'emballage ?',
    a: 'Oui, notre équipe apporte tout le matériel nécessaire : cartons, housses, film plastique et protections pour meubles.',
  },
  {
    q: 'Le prix peut-il changer le jour du déménagement ?',
    a: 'Non. Une fois votre devis validé, le prix est fixe et ne change pas, même si le chargement prend plus de temps que prévu.',
  },
  {
    q: 'Proposez-vous un service de stockage ?',
    a: 'Oui, nous proposons une solution de stockage sécurisé à court ou long terme, avec récupération et livraison à votre convenance.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold tracking-wide text-brand-blue uppercase">
            Questions fréquentes
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Tout ce que vous devez savoir
          </h2>
        </div>

        <div className="mt-12 divide-y divide-slate-100 rounded-2xl bg-slate-50/60 ring-1 ring-slate-100">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.q} className="px-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-semibold text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand-blue transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] pb-5 opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <p className="overflow-hidden text-sm leading-relaxed text-slate-600">
                    {faq.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
