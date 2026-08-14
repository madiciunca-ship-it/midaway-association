import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";

const projectsContent = {
  ro: {
    title: "Proiecte",
    intro:
      "Aici prind formă proiectele Asociației Midaway: inițiative editoriale, culturale și interculturale care duc poveștile mai departe.",
    firstLabel: "Primul proiect",
    gaudeamusTitle: "Midaway la Gaudeamus",
    gaudeamusText:
      "Documentăm întâlnirea dintre cărți și oameni prin imagini, video, conversații și povești care pot deveni puncte de plecare pentru proiecte noi.",
    cta: "Vezi proiectul",
  },

  en: {
    title: "Projects",
    intro:
      "This is where Midaway projects take shape: editorial, cultural, and intercultural initiatives designed to carry stories further.",
    firstLabel: "First project",
    gaudeamusTitle: "Midaway at Gaudeamus",
    gaudeamusText:
      "We document the meeting point between books and people through images, video, conversations, and stories that may inspire new projects.",
    cta: "View project",
  },
};

function ProjectsPage() {
  const { lang = "ro" } = useParams();
  const t = projectsContent[lang];

  return (
    <>
    <Seo
  lang={lang}
  path="/proiecte"
  title={
    lang === "ro"
      ? "Proiecte | Asociația Midaway"
      : "Projects | Midaway Association"
  }
  description={
    lang === "ro"
      ? "Descoperă proiectele Asociației Midaway: inițiative editoriale, culturale și interculturale care duc poveștile mai departe."
      : "Discover Midaway Association projects: editorial, cultural and intercultural initiatives designed to carry stories further."
  }
/>
      <section className="section projects-intro">
        <h1 className="page-title">
          {t.title}
        </h1>

        <p className="page-intro">
          {t.intro}
        </p>
      </section>

      <section className="section section-soft project-card">
        <p className="project-label">
          {t.firstLabel}
        </p>

        <h2>
          {t.gaudeamusTitle}
        </h2>

        <p>
          {t.gaudeamusText}
        </p>

        <Link
          to={`/${lang}/proiecte/gaudeamus`}
          className="primary-button"
        >
          {t.cta}
        </Link>
      </section>
    </>
  );
}

export default ProjectsPage;