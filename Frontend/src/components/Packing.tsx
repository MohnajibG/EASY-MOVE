import { Check } from 'lucide-react'
import truckBack from '../assets/truck-back.jpg'

const items = [
  'Télévisions et écrans plats',
  'Miroirs et vitres',
  'Lampes et luminaires',
  'Tableaux et objets décoratifs',
  'Ordinateurs et électronique',
  'Vaisselle et objets fragiles',
]

export default function Packing() {
  return (
    <section id="emballage" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand-green/20 to-brand-cyan/10 blur-2xl" />
            <img
              src={truckBack}
              alt="Équipe Easy Move en action"
              className="w-full rounded-[2rem] shadow-xl shadow-slate-200"
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold tracking-wide text-brand-blue uppercase">
              Emballage
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              On emballe, vous n'avez rien à faire
            </h2>
            <p className="mt-5 text-lg text-slate-600">
              Matériel professionnel et méthode adaptée à chaque objet. Voici
              ce que nous emballons avec le plus grand soin :
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green/20 text-brand-blue">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
