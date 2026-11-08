import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import type { SVGProps } from "react";
import logo from "../assets/logo-mark.png";

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M15 3h-2a5 5 0 0 0-5 5v3H6v4h2v6h4v-6h3l1-4h-4V8a1 1 0 0 1 1-1h3z" />
  </svg>
);

const links = [
  { href: "#services", label: "Services" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#stockage", label: "Stockage" },
  { href: "#emballage", label: "Emballage" },
  { href: "#faq", label: "FAQ" },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-black pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#accueil" className="flex items-center gap-2.5">
              <img src={logo} alt="Easy Move" className="h-9 w-9 rounded-lg" />
              <span className="font-display text-lg text-white">
                Easy<span className="text-brand-cyan">Move</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-white/50">
              Votre bien, notre priorité. Déménagement résidentiel,
              professionnel et longue distance, partout en Algérie.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-brand-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:0778637433"
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-brand-cyan"
                >
                  <Phone className="h-4 w-4" />
                  07 78 63 74 33
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/50">
                <MapPin className="h-4 w-4" />
                Alger, Algérie
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Suivez-nous</h3>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-brand-blue hover:text-white"
              >
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-brand-blue hover:text-white"
              >
                <FacebookIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Easy Move. Tous droits réservés.
          </p>
          <a
            href="#accueil"
            className="rounded-full bg-white/5 px-5 py-2 text-xs font-semibold text-white/60 transition-colors hover:bg-brand-blue hover:text-white"
          >
            Devis gratuit
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
