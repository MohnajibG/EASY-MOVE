import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import type { SVGProps } from "react";
import logo from "../assets/logo-mark.png";
import { FACEBOOK_URL, INSTAGRAM_URL, WHATSAPP_URL } from "../constants/social";
import { useLanguage } from "../i18n/LanguageContext";

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

const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.74.46 3.43 1.33 4.93L2 22l5.3-1.39a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.1h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.53 3.69-8.22 8.24-8.22 2.2 0 4.27.86 5.83 2.42a8.17 8.17 0 0 1 2.41 5.81c0 4.53-3.69 8.21-8.24 8.21Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.42 1.02 2.58.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29Z" />
  </svg>
);

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#tarifs", label: t.nav.tarifs },
    { href: "#stockage", label: t.nav.stockage },
    { href: "#emballage", label: t.nav.emballage },
    { href: "#faq", label: t.nav.faq },
  ];

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
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">{t.footer.navTitle}</h3>
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
            <h3 className="text-sm font-semibold text-white">{t.footer.contactTitle}</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:+213778637433"
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-brand-cyan"
                >
                  <Phone className="h-4 w-4" />
                  <span dir="ltr">07 78 63 74 33</span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-brand-cyan"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {t.footer.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/50">
                <MapPin className="h-4 w-4" />
                {t.footer.city}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">{t.footer.followTitle}</h3>
            <div className="mt-4 flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-brand-blue hover:text-white"
              >
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-brand-blue hover:text-white"
              >
                <FacebookIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-brand-blue hover:text-white"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Easy Move. {t.footer.rights}
          </p>
          <a
            href="#accueil"
            className="rounded-full bg-white/5 px-5 py-2 text-xs font-semibold text-white/60 transition-colors hover:bg-brand-blue hover:text-white"
          >
            {t.footer.devisBtn}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
