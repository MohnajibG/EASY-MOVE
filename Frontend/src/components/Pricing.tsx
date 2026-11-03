import { BadgeCheck } from 'lucide-react'

const included = [
  'Devis ferme avant le jour J',
  'Main d\'œuvre et carburant inclus',
  'Protection de vos meubles',
  'Protection murs, sols et portes',
  'Aucun frais caché, jamais',
]

export default function Pricing() {
  return (
    <section
      id="tarifs"
      className="relative overflow-hidden bg-brand-blue py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-cyan opacity-20 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-brand-green opacity-10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="text-sm font-semibold tracking-wide text-brand-cyan uppercase">
            Tarification
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Un prix fixe, sans surprise
          </h2>
          <p className="mt-5 text-lg text-slate-200">
            Nous vous donnons un tarif garanti avant le jour de votre
            déménagement. La durée du chargement ne change rien au prix
            annoncé.
          </p>
          <a
            href="#devis"
            className="mt-8 inline-flex items-center rounded-full bg-brand-green px-6 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-brand-green/20 transition-transform hover:scale-105"
          >
            Demander mon prix fixe
          </a>
        </div>

        <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-sm">
          <p className="text-sm font-semibold text-brand-cyan">
            Toujours inclus dans votre devis
          </p>
          <ul className="mt-5 space-y-4">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                <span className="text-base text-slate-100">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
