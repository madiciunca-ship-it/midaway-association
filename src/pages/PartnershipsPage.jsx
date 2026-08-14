import { useParams } from "react-router-dom";
import Seo from "../components/Seo.jsx";

const partnershipsContent = {
  ro: {
    eyebrow: "Parteneriate",

    title:
      "Lucrurile care merită duse mai departe se construiesc împreună.",

    intro:
      "Asociația Midaway dezvoltă parteneriate cu organizații, instituții și oameni care cred în puterea literaturii, educației și schimbului cultural de a crea legături între comunități.",

    partnersTitle: "Putem construi împreună cu",

    partners: [
      {
        title: "Instituții culturale și biblioteci",
        text:
          "Proiecte care aduc cărțile, autorii și poveștile mai aproape de comunități.",
      },
      {
        title: "Școli și organizații educaționale",
        text:
          "Inițiative care folosesc literatura și povestea ca punct de plecare pentru educație, dialog și descoperire.",
      },
      {
        title: "ONG-uri și comunități",
        text:
          "Proiecte locale sau internaționale construite în jurul oamenilor și al poveștilor care merită făcute vizibile.",
      },
      {
        title: "Edituri, autori și profesioniști ai cărții",
        text:
          "Colaborări editoriale, întâlniri, traduceri, evenimente și proiecte prin care literatura poate circula mai departe.",
      },
      {
        title: "Festivaluri și evenimente culturale",
        text:
          "Prezență editorială, documentare și proiecte dezvoltate în jurul întâlnirilor dintre cărți, idei și public.",
      },
      {
        title: "Companii și susținători privați",
        text:
          "Parteneriate prin care proiectele culturale și educaționale pot primi resursele necesare pentru a deveni realitate.",
      },
    ],

    projectsTitle:
      "De la o idee la un proiect care ajunge la oameni.",

    directions: [
      {
        title: "Proiecte editoriale și interculturale",
        text:
          "Traduceri, circulația poveștilor între limbi și culturi și întâlniri între autori și comunități.",
      },
      {
        title: "Educație prin literatură",
        text:
          "Ateliere, întâlniri, lectură și proiecte construite în jurul cărților.",
      },
      {
        title: "Evenimente și conversații",
        text:
          "Lansări, festivaluri, dialoguri și contexte în care oamenii se pot întâlni în jurul ideilor.",
      },
      {
        title: "Documentare și storytelling",
        text:
          "Imagini, video și text care păstrează și duc mai departe poveștile întâlnite pe teren.",
      },
    ],

    finalTitle:
      "Unele proiecte încep cu o idee. Altele încep cu o conversație.",

    finalText:
      "Dacă vedeți un loc în care drumurile noastre s-ar putea întâlni, scrieți-ne.",

    cta: "Hai să vorbim",
  },

  en: {
    eyebrow: "Partnerships",

    title:
      "What is worth carrying forward is built together.",

    intro:
      "Midaway Association builds partnerships with organisations, institutions and people who believe in the power of literature, education and cultural exchange to connect communities.",

    partnersTitle: "Who we can build with",

    partners: [
      {
        title: "Cultural institutions and libraries",
        text:
          "Projects that bring books, authors and stories closer to communities.",
      },
      {
        title: "Schools and educational organisations",
        text:
          "Initiatives that use literature and storytelling as starting points for education, dialogue and discovery.",
      },
      {
        title: "NGOs and communities",
        text:
          "Local or international projects built around people and stories that deserve to be seen and heard.",
      },
      {
        title: "Publishers, authors and book professionals",
        text:
          "Editorial collaborations, encounters, translations, events and projects that help literature travel further.",
      },
      {
        title: "Festivals and cultural events",
        text:
          "Editorial projects, documentation and collaborations built around encounters between books, ideas and audiences.",
      },
      {
        title: "Companies and individual supporters",
        text:
          "Partnerships that can provide cultural and educational projects with the resources they need to become reality.",
      },
    ],

    projectsTitle:
      "From an idea to a project that reaches people.",

    directions: [
      {
        title: "Editorial and intercultural projects",
        text:
          "Translations, stories travelling between languages and cultures, and encounters between authors and communities.",
      },
      {
        title: "Education through literature",
        text:
          "Workshops, encounters, reading activities and projects built around books.",
      },
      {
        title: "Events and conversations",
        text:
          "Launches, festivals, dialogues and spaces where people can come together around ideas.",
      },
      {
        title: "Documentation and storytelling",
        text:
          "Images, video and text that preserve and carry forward stories gathered on the ground.",
      },
    ],

    finalTitle:
      "Some projects begin with an idea. Others begin with a conversation.",

    finalText:
      "If you see a place where our paths might meet, we'd love to hear from you.",

    cta: "Let's talk",
  },
};

function PartnershipsPage() {
  const { lang = "ro" } = useParams();
  const t =
    partnershipsContent[lang] ||
    partnershipsContent.ro;

  return (
    <>
      <Seo
        lang={lang}
        path="/parteneriate"
        title={
          lang === "ro"
            ? "Parteneriate | Asociația Midaway"
            : "Partnerships | Midaway Association"
        }
        description={
          lang === "ro"
            ? "Asociația Midaway dezvoltă parteneriate în literatură, educație și schimb cultural, alături de instituții, organizații și comunități."
            : "Midaway Association builds partnerships in literature, education and cultural exchange with institutions, organisations and communities."
        }
      />

      <main className="partnerships-page">
        <section className="partnerships-hero">
          <div className="partnerships-inner">
          <div className="partnerships-divider gold" />
            <p className="partnerships-eyebrow">
              {t.eyebrow}
            </p>

            <h1 className="partnerships-title">
              {t.title}
            </h1>

            <p className="partnerships-intro">
              {t.intro}
            </p>
          </div>
        </section>

        <section className="partnerships-section">
  <div className="partnerships-inner">
    <div className="partnerships-divider teal" />

    <h2>
      {t.partnersTitle}
    </h2>

            <div className="partnerships-grid">
              {t.partners.map((item) => (
                <article
                  className="partnership-item"
                  key={item.title}
                >
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="partnerships-section partnerships-soft">
  <div className="partnerships-inner">
    <div className="partnerships-divider gold" />

    <h2>
      {t.projectsTitle}
    </h2>

            <div className="partnerships-grid">
              {t.directions.map((item) => (
                <article
                  className="partnership-item"
                  key={item.title}
                >
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="partnerships-final">
  <div className="partnerships-inner">
    <div className="partnerships-divider teal" />

    <h2>
      {t.finalTitle}
    </h2>

            <p>
              {t.finalText}
            </p>

            <a
              className="primary-button"
              href="mailto:office@midaway.ro"
            >
              {t.cta}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default PartnershipsPage;