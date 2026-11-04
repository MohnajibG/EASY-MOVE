import { motion } from "framer-motion";
import type { SVGProps } from "react";

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const SocialCTA = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-brand-green to-brand-cyan py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-5 text-center lg:px-8"
      >
        <motion.span
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-white"
        >
          <InstagramIcon className="h-6 w-6" />
        </motion.span>
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
          Suivez notre camion sur les réseaux
        </h2>
        <p className="max-w-lg text-sm text-slate-800 sm:text-base">
          Coulisses de nos déménagements, astuces d'emballage et bons plans :
          rejoignez la communauté Easy Move.
        </p>
        <a
          href="#"
          className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          Nous suivre
        </a>
      </motion.div>
    </section>
  );
};

export default SocialCTA;
