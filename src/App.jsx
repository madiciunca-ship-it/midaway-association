import { useState } from "react";
import "./App.css";

const content = {
  ro: {
    eyebrow: "Asociația Midaway",

    titleLine1: "Cărțile pot traversa granițe.",
titleLine2: "Ideile, și mai departe.",
    intro:
      "Asociația Midaway creează punți între literatură, educație și comunități, transformând cărțile și poveștile în proiecte care pot circula între limbi, formate, oameni și culturi.",

    cta: "Află mai multe",

    whyTitle: "De ce există Midaway",

    whyLead:
      "O carte nu ar trebui să se oprească la granița unei limbi.",

    whyText:
      "O poveste poate începe într-o carte și poate ajunge într-o altă limbă, într-un audiobook, într-o bibliotecă, într-o școală sau într-o comunitate aflată la mii de kilometri distanță.",

    whyTextSecond:
      "Prin traduceri, ediții digitale, audiobook-uri, donații de carte și parteneriate culturale, vrem să facem poveștile accesibile unor comunități noi.",

    whatTitle: "Ce facem",

    whatLead:
    "Traducem • Facem accesibil • Dăm mai departe",

    translateTitle: "Traducem",

    translateText:
      "Selectăm titluri Midaway și dezvoltăm ediții în alte limbi, împreună cu traducători și parteneri culturali, pentru ca poveștile să poată circula dincolo de limba în care au fost scrise.",

    accessibleTitle: "Facem accesibil",

    accessibleText:
      "Transformăm titluri selectate în audiobook-uri și formate digitale pentru ca ele să poată ajunge și la oameni pentru care cartea tipărită nu este cea mai accesibilă formă de lectură.",

    forwardTitle: "Dăm mai departe",

    forwardText:
      "Construim parteneriate cu biblioteci, școli, centre culturale și organizații pentru tineri și oferim cărți și materiale culturale comunităților în care pot deschide conversații noi.",

    startingTitle: "De unde pornim",

    startingLead:
      "Pornim de la un catalog de 9 titluri publicate și continuăm să construim.",

    startingText:
      "Cărți noi sunt deja în lucru, iar fiecare poveste poate deschide un nou drum: spre o altă limbă, un alt format sau o altă comunitate.",

    realWorldTitle:
      "Sursa noastră de material este lumea reală.",

    realWorldText:
      "Călătoria nu este decor pentru Midaway. Este una dintre metodele prin care descoperim povești, oameni și conexiuni care pot deveni literatură și proiecte culturale.",

    openAuthorsText:
      "Midaway pornește din propriul său catalog editorial, dar rămâne deschisă proiectelor, autorilor și vocilor care dau sens aceleiași direcții culturale.",

    projectTitle: "Midaway la Gaudeamus",

    projectLabel: "Primul proiect",

    projectText:
      "Începem de acolo de unde pornește totul pentru noi: întâlnirea dintre cărți și oameni. La Gaudeamus documentăm primele momente ale Asociației Midaway prin imagini, video, conversații și întâlniri care pot deveni puncte de plecare pentru proiecte noi.",

    projectMedia:
      "Fotografii, secvențe video și povești de la eveniment vor fi adăugate aici.",

    modelTitle: "Cum funcționează Midaway",

    modelLead:
      "Midaway pornește din povești și crește prin oameni.",

    modelText:
      "Dezvoltăm proiectele, materialele și infrastructura necesară, apoi lucrăm împreună cu parteneri locali pentru ca ele să ajungă în comunitățile cărora le sunt destinate.",

      modelFormula:
      "Coordonare internațională • Parteneriate locale • Impact în comunitate",

    destinationsTitle:
      "Unde pot ajunge poveștile",

    destinations:
      "Biblioteci · Școli · Organizații pentru tineri · Centre culturale · Comunități internaționale",

    circulation:
      "Nu vrem doar ca o carte să fie publicată. Vrem să-i oferim posibilitatea de a continua să circule.",

    partnershipsTitle: "Parteneriate",

    partnershipsLead:
      "O poveste ajunge mai departe atunci când oamenii o duc mai departe.",

    partnershipsText:
      "Colaborăm cu biblioteci, școli, organizații, traducători, profesioniști din domeniul cultural, comunități și oameni aflați în diferite colțuri ale lumii.",

    partnershipsQuestion:
      "Ai o bibliotecă, o organizație, o instituție culturală sau o comunitate căreia i-ar putea fi utile aceste materiale?",

    partnershipsCta:
      "Hai să construim ceva împreună.",

    supportTitle: "Susține un proiect",

    supportLead:
      "Transformă o carte într-o călătorie mai lungă.",

    supportText:
      "Contribuția poate susține traducerea unui titlu, producția unui audiobook, cărți pentru o bibliotecă sau o comunitate, materiale educaționale ori un proiect intercultural.",

    supportNote:
      "Fiecare proiect va putea fi prezentat transparent, cu obiectiv, stadiu și rezultate concrete.",

    visionTitle: "Mai departe",

    visionLead:
      "Pornim de la cărți, dar nu ne oprim la ele.",

    visionText:
      "Literatura este punctul nostru de plecare pentru proiecte educaționale, culturale și interculturale care conectează oameni și comunități.",

    contact: "Contact",
  },

  en: {
    eyebrow: "Midaway Association",

    titleLine1: "Books can cross borders.",
titleLine2: "Ideas can go even further.",

intro:
     "Midaway Association builds bridges between literature, education, and communities, turning books and stories into projects that can travel across languages, formats, cultures, and communities.",
     

    cta: "Learn more",

    whyTitle: "Why Midaway exists",

    whyLead:
    "A book should not stop at the boundaries of a language.",

    whyText:
    "A story can begin in a book and find its way into another language, an audiobook, a library, a school, or a community thousands of kilometres away.",

    whyTextSecond:
      "Through translations, digital editions, audiobooks, book donations, and cultural partnerships, we want to make stories accessible to new communities.",

    whatTitle: "What we do",

    whatLead:
      "We translate • We make stories accessible • We carry them forward",

    translateTitle: "We translate",

    translateText:
      "We select Midaway titles and develop editions in other languages together with translators and cultural partners, so stories can travel beyond the language in which they were written.",

    accessibleTitle: "We make stories accessible",

    accessibleText:
    "We transform selected titles into audiobooks and digital formats so they can reach people for whom printed books are not the most accessible format.",
    
    forwardTitle: "We carry them forward",

    forwardText:
    "We build partnerships with libraries, schools, cultural centres, and youth organisations, offering books and cultural materials to communities where they can spark new conversations.",

    startingTitle: "Where we begin",

    startingLead:
      "We begin with a catalogue of 9 published titles and continue to build.",

    startingText:
      "New titles are already in development, and every story can open a new path: towards another language, another format, or another community.",

    realWorldTitle:
      "The real world is our source material.",

    realWorldText:
      "For Midaway, travel is more than a backdrop. It is one of the ways we discover stories, people, and connections that can become literature and cultural projects.",

    openAuthorsText:
      "Midaway begins with its own publishing catalogue while remaining open to projects, authors, and voices that align with the same cultural vision.",

    projectTitle: "Midaway at Gaudeamus",

    projectLabel: "First project",

    projectText:
      "We begin where it all starts for us: where books meet people. At Gaudeamus, we document the first moments of Midaway Association through images, video, conversations, and encounters that may become starting points for new projects.",

    projectMedia:
      "Photographs, video clips, and stories from the event will be added here.",

    modelTitle: "How Midaway works",

    modelLead:
      "Midaway begins with stories and grows through people.",

    modelText:
      "We develop the projects, materials, and infrastructure they require, then work with local partners to bring them to the communities they are meant to serve.",

      modelFormula:
      "International coordination • Local partnerships • Community impact",

    destinationsTitle:
      "Where stories can go",

    destinations:
      "Libraries · Schools · Youth organisations · Cultural centres · International communities",

    circulation:
      "We do not want a book simply to be published. We want to help it keep circulating.",

    partnershipsTitle: "Partnerships",

    partnershipsLead:
      "A story travels further when people carry it forward.",

    partnershipsText:
      "We collaborate with libraries, schools, organisations, translators, cultural professionals, communities, and people in different parts of the world.",

    partnershipsQuestion:
      "Do you represent a library, organisation, cultural institution, or community that could make use of these materials?",

    partnershipsCta:
      "Let’s build something together.",

    supportTitle: "Support a project",

    supportLead:
      "Help a book travel further.",

    supportText:
      "A contribution can support the translation of a title, the production of an audiobook, books for a library or community, educational materials, or an intercultural project.",

    supportNote:
      "Each project will be presented transparently, with a clear objective, progress updates, and tangible results.",

    visionTitle: "Beyond the book",

    visionLead:
      "We begin with books, but we go beyond them.",

    visionText:
      "Literature is our starting point for educational, cultural, and intercultural projects that connect people and communities.",

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
          <img
            src="/association-mark.png"
            alt=""
            aria-hidden="true"
          />

          <div className="brand-text">
            <span className="brand-main">
              MIDAWAY
            </span>

            <span className="brand-sub">
              ASSOCIATION
            </span>
          </div>
        </div>

        <div
          className="lang-switch"
          aria-label="Language selector"
        >
          <button
            type="button"
            className={
              lang === "ro"
                ? "active"
                : ""
            }
            onClick={() =>
              setLang("ro")
            }
            aria-pressed={
              lang === "ro"
            }
          >
            RO
          </button>

          <button
            type="button"
            className={
              lang === "en"
                ? "active"
                : ""
            }
            onClick={() =>
              setLang("en")
            }
            aria-pressed={
              lang === "en"
            }
          >
            EN
          </button>
        </div>
      </header>

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

      <footer className="footer">
        <div>
          © 2026 ASOCIAȚIA MIDAWAY
        </div>

        <div>
          {t.contact}:{" "}
          contact@midaway.com
        </div>
      </footer>
    </main>
  );
}

export default App;