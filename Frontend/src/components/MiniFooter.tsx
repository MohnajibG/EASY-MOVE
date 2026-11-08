import { useLanguage } from "../i18n/LanguageContext";

const MiniFooter = () => {
  const { t } = useLanguage();

  return (
    <div className="border-t border-white/5 bg-black py-4">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-5 text-center text-[11px] text-white/25 lg:px-8">
        <span>{t.miniFooter.madeBy}</span>
        <a
          href="https://mngdev.pro/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 transition-colors hover:text-brand-cyan"
        >
          MNG Dev Pro
        </a>
        <span className="text-white/15">·</span>
        <a
          href="mailto:contact@mngdev.pro"
          className="text-white/40 transition-colors hover:text-brand-cyan"
        >
          contact@mngdev.pro
        </a>
      </div>
    </div>
  );
};

export default MiniFooter;
