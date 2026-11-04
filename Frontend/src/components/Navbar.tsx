import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import logo from "../assets/logo-mark.png";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#stockage", label: "Stockage" },
  { href: "#emballage", label: "Emballage" },
  { href: "#temoignages", label: "Avis" },
  { href: "#faq", label: "FAQ" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 shadow-sm shadow-black/5 backdrop-blur-lg"
          : "bg-white/0"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <a href="#accueil" className="flex items-center gap-2.5">
          <motion.img
            whileHover={{ rotate: -8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
            src={logo}
            alt="Easy Move"
            className="h-9 w-9 rounded-lg"
          />
          <span className="font-display text-lg text-brand-blue">
            Easy<span className="text-slate-900">Move</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-blue"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:0778637433"
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-brand-blue"
          >
            <Phone className="h-4 w-4" />
            07 78 63 74 33
          </a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#accueil"
            className="rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 hover:bg-brand-blue-dark"
          >
            Devis gratuit
          </motion.a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 lg:hidden"
          aria-label="Ouvrir le menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-100 bg-white/95 backdrop-blur-lg lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex flex-col gap-3">
                <a
                  href="tel:0778637433"
                  className="flex items-center gap-2 px-3 text-sm font-semibold text-slate-700"
                >
                  <Phone className="h-4 w-4" />
                  07 78 63 74 33
                </a>
                <a
                  href="#accueil"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-brand-blue px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  Devis gratuit
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
