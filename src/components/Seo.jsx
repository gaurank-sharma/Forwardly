import { useEffect } from "react";

const SITE = "https://forwardly.in";

/** Sets/updates a <meta> (by name or property) in <head>. */
function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Seo — updates document title, description, canonical and OG/Twitter tags
 * per route (for users + JS-capable crawlers). Static homepage SEO + JSON-LD
 * live in index.html.
 */
export default function Seo({ title, description, path = "/" }) {
  useEffect(() => {
    const url = `${SITE}${path}`;
    if (title) document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);
  }, [title, description, path]);

  return null;
}
