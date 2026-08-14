import { useParams } from "react-router-dom";
import { homeContent } from "../homeContent.js";
import "../App.css";
import Seo from "../components/Seo.jsx";

function HomePage() {
    const { lang = "ro" } = useParams();
    const t = homeContent[lang];
  
    return (
        <>
        <Seo
  lang={lang}
  path="/"
  title={
    lang === "ro"
      ? "Asociația Midaway | Literatură, educație și comunități"
      : "Midaway Association | Literature, Education and Communities"
  }
  description={
    lang === "ro"
      ? "Asociația Midaway creează punți între literatură, educație și comunități, transformând cărțile și poveștile în proiecte care circulă între limbi, formate, oameni și culturi."
      : "Midaway Association builds bridges between literature, education and communities, turning books and stories into projects that travel across languages, formats, people and cultures."
  }
/>
        <section className="hero">
          <div className="hero-symbol-wrap">
            <img
              src="/association-mark.png"
              alt="Midaway"
              className="hero-logo"
            />
          </div>
  
          <p className="eyebrow">
            {t.eyebrow}
          </p>
  
          <h1>
    <span>{t.titleLine1}</span>
    <span>{t.titleLine2}</span>
  </h1>
  
          <p className="lead">
            {t.intro}
          </p>
  
          <a
            href="#mission"
            className="primary-button"
          >
            {t.cta}
          </a>
        </section>
  
        <section
          id="mission"
          className="section"
        >
          <h2>{t.whyTitle}</h2>
  
          <p className="section-lead">
    {t.whyLead}
  </p>
  
          <p>
            {t.whyText}
          </p>
  
          <p>
            {t.whyTextSecond}
          </p>
        </section>
  
        <section className="section section-soft">
          <h2>{t.whatTitle}</h2>
          
          <p className="section-lead">
    {t.whatLead}
  </p>
  
          <div className="activity-list">
            <article className="activity-item">
              <h3>
                {t.translateTitle}
              </h3>
  
              <p>
                {t.translateText}
              </p>
            </article>
  
            <article className="activity-item">
              <h3>
                {t.accessibleTitle}
              </h3>
  
              <p>
                {t.accessibleText}
              </p>
            </article>
  
            <article className="activity-item">
              <h3>
                {t.forwardTitle}
              </h3>
  
              <p>
                {t.forwardText}
              </p>
            </article>
          </div>
        </section>
  
        <section className="section">
          <h2>{t.startingTitle}</h2>
  
          <p className="section-lead">
    {t.startingLead}
  </p>
  
          <p>
            {t.startingText}
          </p>
  
          <div className="section-break">
            <h3>
              {t.realWorldTitle}
            </h3>
  
            <p>
              {t.realWorldText}
            </p>
  
            <p>
              {t.openAuthorsText}
            </p>
          </div>
        </section>
  
        <section className="section section-soft project-section">
        <p className="project-label">
    {t.projectLabel}
  </p>
  
  <h2>{t.projectTitle}</h2>
  
          <p>
            {t.projectText}
          </p>
  
          <p className="project-media-note">
            {t.projectMedia}
          </p>
        </section>
  
        <section className="section">
          <h2>{t.modelTitle}</h2>
  
          <p className="section-lead">
    {t.modelLead}
  </p>
          <p>
            {t.modelText}
          </p>
  
          <p className="section-slogan">
    {t.modelFormula}
  </p>
        </section>
  
        <section className="section section-soft">
          <h2>
            {t.destinationsTitle}
          </h2>
  
          <p className="destinations">
            {t.destinations}
          </p>
  
          <p className="section-slogan">
    {t.circulation}
  </p>
        </section>
  
        <section className="section">
          <h2>
            {t.partnershipsTitle}
          </h2>
  
          <p className="section-lead">
          {t.partnershipsLead}
  </p>
  
          <p>
            {t.partnershipsText}
          </p>
  
          <p>
            {t.partnershipsQuestion}
          </p>
  
          <p className="section-slogan">
    {t.partnershipsCta}
  </p>
        </section>
  
        <section className="section section-soft">
          <h2>
            {t.supportTitle}
          </h2>
  
          <p className="section-lead">
          {t.supportLead}
  </p>
  
          <p>
            {t.supportText}
          </p>
  
          <p>
            {t.supportNote}
          </p>
        </section>
  
        <section className="section">
          <h2>
            {t.visionTitle}
          </h2>
  
          <p className="section-lead">
          {t.visionLead}
  </p>
  
          <p>
            {t.visionText}
          </p>
        </section>
  
        
        </>
    );
  }

  export default HomePage;