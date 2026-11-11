import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { SITE_NAME, SITE_URL } from "../constants/site";

const ogLocales: Record<string, string> = {
  fr: "fr_FR",
  en: "en_US",
  ar: "ar_DZ",
};

const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setCanonical = (href: string) => {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

type Props = {
  title?: string;
  description?: string;
  noindex?: boolean;
};

const Seo = ({ title, description, noindex = false }: Props) => {
  const { t, lang } = useLanguage();
  const { pathname } = useLocation();

  useEffect(() => {
    const finalTitle = title ?? t.meta.title;
    const finalDescription = description ?? t.meta.description;
    const url = `${SITE_URL}${pathname === "/" ? "" : pathname}`;

    document.title = finalTitle;
    setMeta("name", "description", finalDescription);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    setCanonical(url);

    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:title", finalTitle);
    setMeta("property", "og:description", finalDescription);
    setMeta("property", "og:url", url);
    setMeta("property", "og:locale", ogLocales[lang] ?? "fr_FR");
    setMeta("name", "twitter:title", finalTitle);
    setMeta("name", "twitter:description", finalDescription);
  }, [title, description, noindex, pathname, lang, t]);

  return null;
};

export default Seo;
