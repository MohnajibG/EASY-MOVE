import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo-mark.png";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#accueil", label: t.nav.accueil },
    { href: "/#services", label: t.nav.services },
    { href: "/#tarifs", label: t.nav.tarifs },
    { href: "/#stockage", label: t.nav.stockage },
    { href: "/#emballage", label: t.nav.emballage },
    { href: "/#temoignages", label: t.nav.avis },
    { href: "/#faq", label: t.nav.faq },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-black/80 shadow-sm shadow-black/40 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <motion.img
            whileHover={{ rotate: -8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
            src={logo}
            alt="Easy Move"
            className="h-9 w-9 rounded-lg"
          />
          <span className="font-display text-lg text-white">
            Easy<span className="text-brand-cyan">Move</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-brand-cyan"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher dark />
          <a
            href="tel:+213778637433"
            className="flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-brand-cyan"
          >
            <Phone className="h-4 w-4" />
            <span dir="ltr">07 78 63 74 33</span>
          </a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="/#devis"
            className="rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-black"
          >
            {t.nav.devis}
          </motion.a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher dark />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white"
            aria-label={t.nav.openMenuAria}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <div
        className={`grid overflow-hidden border-t bg-black/95 backdrop-blur-lg transition-all duration-300 ease-in-out lg:hidden ${
          open
            ? "grid-rows-[1fr] border-white/10 opacity-100"
            : "grid-rows-[0fr] border-transparent opacity-0"
        }`}
      >
        <ul className="flex min-h-0 flex-col gap-1 overflow-hidden px-5 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-white/80 hover:bg-white/5 hover:text-brand-cyan"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2 flex flex-col gap-3">
            <a
              href="tel:+213778637433"
              className="flex items-center gap-2 px-3 text-sm font-semibold text-white/80"
            >
              <Phone className="h-4 w-4" />
              <span dir="ltr">07 78 63 74 33</span>
            </a>
            <a
              href="/#devis"
              onClick={() => setOpen(false)}
              className="rounded-full bg-brand-green px-5 py-3 text-center text-sm font-semibold text-black"
            >
              {t.nav.devis}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
