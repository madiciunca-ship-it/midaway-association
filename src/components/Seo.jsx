import { useEffect } from "react";

function Seo({
  lang = "ro",
  title,
  description,
  path = "",
  image = "https://midaway.com/association-logo.png",
}) {
  useEffect(() => {
    const baseUrl = "https://midaway.com";

    const cleanPath = path.startsWith("/")
      ? path
      : `/${path}`;

    const canonicalUrl = `${baseUrl}/${lang}${cleanPath === "/" ? "" : cleanPath}`;

    const roUrl = `${baseUrl}/ro${cleanPath === "/" ? "" : cleanPath}`;
    const enUrl = `${baseUrl}/en${cleanPath === "/" ? "" : cleanPath}`;

    document.documentElement.lang = lang;

    document.title = title;

    function setMeta(selector, attribute, value) {
      let element = document.head.querySelector(selector);

      if (!element) {
        element = document.createElement("meta");
        document.head.appendChild(element);
      }

      Object.entries(attribute).forEach(([key, val]) => {
        element.setAttribute(key, val);
      });

      element.setAttribute("content", value);
    }

    function setLink(rel, hreflang, href) {
      const selector = hreflang
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]`;

      let element = document.head.querySelector(selector);

      if (!element) {
        element = document.createElement("link");
        element.rel = rel;

        if (hreflang) {
          element.hreflang = hreflang;
        }

        document.head.appendChild(element);
      }

      element.href = href;
    }

    setMeta(
      'meta[name="description"]',
      { name: "description" },
      description
    );

    setMeta(
        'meta[name="robots"]',
        { name: "robots" },
        "index, follow"
      );

    setMeta(
      'meta[property="og:title"]',
      { property: "og:title" },
      title
    );

    setMeta(
      'meta[property="og:description"]',
      { property: "og:description" },
      description
    );

    setMeta(
      'meta[property="og:type"]',
      { property: "og:type" },
      "website"
    );

    setMeta(
      'meta[property="og:url"]',
      { property: "og:url" },
      canonicalUrl
    );

    setMeta(
      'meta[property="og:image"]',
      { property: "og:image" },
      image
    );

    setMeta(
      'meta[property="og:site_name"]',
      { property: "og:site_name" },
      "Asociația Midaway"
    );

    setLink("canonical", null, canonicalUrl);

    setLink("alternate", "ro", roUrl);
    setLink("alternate", "en", enUrl);
    setLink("alternate", "x-default", roUrl);
  }, [
    lang,
    title,
    description,
    path,
    image,
  ]);

  return null;
}

export default Seo;