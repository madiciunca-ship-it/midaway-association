import { useState } from "react";
import "./App.css";

const content = {
  ro: {
    eyebrow: "Asociația Midaway",
    title: "Cărțile pot traversa granițe. Ideile, și mai departe.",
    intro:
      "Asociația Midaway susține accesul la cultură, circulația cărților și proiectele care apropie oameni, limbi și comunități.",
    missionTitle: "Misiunea noastră",
    missionText:
      "Construim punți între autori, cititori și comunități și susținem proiecte culturale, educaționale și editoriale cu impact real.",
    supportTitle: "Cum poți susține",
    supportText:
      "Prin donații, parteneriate, voluntariat sau prin implicarea în proiectele noastre.",
    cta: "Află mai multe",
    contact: "Contact",
  },

  en: {
    eyebrow: "Midaway Association",
    title: "Books can cross borders. Ideas can go even further.",
    intro:
      "Midaway Association supports access to culture, the circulation of books, and projects that connect people, languages, and communities.",
    missionTitle: "Our mission",
    missionText:
      "We build bridges between authors, readers, and communities and support cultural, educational, and publishing initiatives with real impact.",
    supportTitle: "How you can support us",
    supportText:
      "Through donations, partnerships, volunteering, or direct involvement in our projects.",
    cta: "Learn more",
    contact: "Contact",
  },
};

function App() {
  const [lang, setLang] = useState("ro");
  const t = content[lang];

  return (
    <main className="site">
      <header className="header">
      <div className="brand">
  <img src="/association-mark.png" alt="" />
  <span>MIDAWAY</span>
</div>

        <div className="lang-switch">
          <button
            type="button"
            className={lang === "ro" ? "active" : ""}
            onClick={() => setLang("ro")}
          >
            RO
          </button>

          <button
            type="button"
            className={lang === "en" ? "active" : ""}
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </div>
      </header>

      <section className="hero">
      <img
  src="/association-mark.png"
  alt="Midaway"
  className="hero-logo"
/>
        <p className="eyebrow">{t.eyebrow}</p>

        <h1>{t.title}</h1>

        <p className="lead">{t.intro}</p>

        <a href="#mission" className="primary-button">
          {t.cta}
        </a>
      </section>

      <section id="mission" className="section">
        <h2>{t.missionTitle}</h2>
        <p>{t.missionText}</p>
      </section>

      <section className="section section-soft">
        <h2>{t.supportTitle}</h2>
        <p>{t.supportText}</p>
      </section>

      <footer className="footer">
        <div>© 2026 Asociația Midaway</div>
        <div>{t.contact}: contact@midaway.com</div>
      </footer>
    </main>
  );
}

export default App;