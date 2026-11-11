import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MiniFooter from "../components/MiniFooter";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { useLanguage } from "../i18n/LanguageContext";

const MentionsLegales = () => {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="bg-white pt-32 pb-24 lg:pt-40">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline"
            >
              <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
              {t.legal.backHome}
            </Link>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
              {t.legal.title}
            </h1>
            <p className="mt-2 text-sm text-black/40">{t.legal.updated}</p>
          </motion.div>

          <div className="mt-12 space-y-10">
            {t.legal.sections.map((section, i) => (
              <motion.section
                key={section.heading}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <h2 className="text-lg font-bold text-black">{section.heading}</h2>
                <p className="mt-2 text-sm leading-relaxed text-black/60">
                  {section.body}
                </p>
              </motion.section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <MiniFooter />
      <FloatingWhatsApp />
    </>
  );
};

export default MentionsLegales;
