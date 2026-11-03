import { useState, type FormEvent } from 'react'
import { ArrowRight, MapPin, PhoneCall } from 'lucide-react'
import truck from '../assets/truck-hero.jpg'

const moveTypes = [
  'Appartement',
  'Maison',
  'Bureau / Entreprise',
  'Petit déménagement',
  'Autre',
]

export default function Hero() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-slate-950 pt-32 pb-24 lg:pt-40 lg:pb-32"
    >
      {/* decorative gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand-blue opacity-40 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-brand-cyan opacity-20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-brand-green opacity-10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-brand-cyan ring-1 ring-white/20">
            <MapPin className="h-4 w-4" /> Partout en Algérie
          </span>

          <h1 className="mt-6 text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Votre déménagement,{' '}
            <span className="bg-gradient-to-r from-brand-cyan to-brand-green bg-clip-text text-transparent">
              en toute facilité
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-slate-300">
            Équipe professionnelle, transport sécurisé et emballage soigné.
            Votre bien, notre priorité — où que vous alliez en Algérie.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#devis"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-brand-green/20 transition-transform hover:scale-105"
            >
              Obtenir un devis gratuit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:0778637433"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white/10"
            >
              <PhoneCall className="h-4 w-4" />
              07 78 63 74 33
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-blue/40 via-transparent to-brand-cyan/20 blur-2xl" />
          <img
            src={truck}
            alt="Camion Easy Move"
            className="w-full rounded-[2rem] shadow-2xl shadow-black/40 ring-1 ring-white/10"
          />
        </div>
      </div>

      {/* quote form */}
      <div
        id="devis"
        className="relative mx-auto mt-16 max-w-5xl px-5 lg:px-8"
      >
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 rounded-3xl bg-white p-6 shadow-2xl shadow-black/30 sm:grid-cols-2 lg:grid-cols-5 lg:items-end lg:gap-3 lg:p-5"
        >
          <div className="lg:col-span-1">
            <label className="mb-1.5 block text-xs font-semibold text-slate-500">
              Date souhaitée
            </label>
            <input
              type="date"
              required
              className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            />
          </div>

          <div className="lg:col-span-1">
            <label className="mb-1.5 block text-xs font-semibold text-slate-500">
              Type de déménagement
            </label>
            <select
              required
              defaultValue=""
              className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            >
              <option value="" disabled>
                Choisir
              </option>
              {moveTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="lg:col-span-1">
            <label className="mb-1.5 block text-xs font-semibold text-slate-500">
              Adresse de départ
            </label>
            <input
              type="text"
              placeholder="Ville, quartier"
              required
              className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            />
          </div>

          <div className="lg:col-span-1">
            <label className="mb-1.5 block text-xs font-semibold text-slate-500">
              Adresse d'arrivée
            </label>
            <input
              type="text"
              placeholder="Ville, quartier"
              required
              className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            />
          </div>

          <button
            type="submit"
            className="rounded-xl bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition-colors hover:bg-brand-blue-dark lg:col-span-1"
          >
            Obtenir mon devis
          </button>

          {sent && (
            <p className="text-sm font-medium text-emerald-600 sm:col-span-2 lg:col-span-5">
              Merci ! Votre demande a été enregistrée, nous vous recontactons
              très vite.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
