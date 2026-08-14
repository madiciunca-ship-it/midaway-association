import { useParams } from "react-router-dom";
import Seo from "../components/Seo.jsx";

const contactContent = {
  ro: {
    eyebrow: "Contact",

    title:
      "O conversație poate fi începutul unui drum nou.",

    intro:
      "Ai o idee, un proiect sau vezi un loc în care Midaway ar putea construi ceva împreună cu tine? Scrie-ne.",

    associationLabel: "Asociația Midaway",

    associationText:
      "Pentru parteneriate, proiecte culturale, educaționale și interculturale:",

    associationEmail: "office@midaway.ro",

    contactPersonLabel: "Persoană de contact",

contactPersonName: "Maria Magdalena CIUNCA",

contactPersonRole:
  "Președinte, Asociația Midaway",

contactPersonPhone: "+40 740 010 119",
  },

  en: {
    eyebrow: "Contact",

    title:
      "A conversation can be the beginning of a new journey.",

    intro:
      "Have an idea, a project, or see an opportunity for Midaway to build something together with you? Write to us.",

    associationLabel: "Midaway Association",

    associationText:
      "For partnerships and cultural, educational or intercultural projects:",

    associationEmail: "office@midaway.ro",

    contactPersonLabel: "Contact person",

contactPersonName: "Maria Magdalena CIUNCA",

contactPersonRole:
  "President, Midaway Association",

contactPersonPhone: "+40 740 010 119",
  },
};

function ContactPage() {
  const { lang = "ro" } = useParams();
  const t =
    contactContent[lang] ||
    contactContent.ro;

  return (
    <>
      <Seo
        lang={lang}
        path="/contact"
        title={
          lang === "ro"
            ? "Contact | Asociația Midaway"
            : "Contact | Midaway Association"
        }
        description={
          lang === "ro"
            ? "Contactează Asociația Midaway pentru parteneriate și proiecte culturale, educaționale și interculturale."
            : "Contact Midaway Association for partnerships and cultural, educational and intercultural projects."
        }
      />

      <main className="contact-page">
        <section className="contact-hero">
          <div className="contact-inner">
            <div className="contact-divider" />

            <p className="contact-eyebrow">
              {t.eyebrow}
            </p>

            <h1 className="contact-title">
              {t.title}
            </h1>

            <p className="contact-intro">
              {t.intro}
            </p>

            <div className="contact-details">
              <p className="contact-label">
                {t.associationLabel}
              </p>

              <p className="contact-description">
                {t.associationText}
              </p>

              <a
                className="contact-email"
                href={`mailto:${t.associationEmail}`}
              >
                {t.associationEmail}
              </a>

              <div className="contact-person">
              <div className="contact-person-photo">
  <img
    src="/images/maria-ciunca.jpg"
    alt="Maria Magdalena Ciunca"
  />
</div>

  <div className="contact-person-info">
    <p className="contact-person-label">
      {t.contactPersonLabel}
    </p>

    <h3 className="contact-person-name">
      {t.contactPersonName}
    </h3>

    <p className="contact-person-role">
      {t.contactPersonRole}
    </p>

    <a
      className="contact-person-phone"
      href="tel:+40740010119"
    >
      {t.contactPersonPhone}
    </a>
  </div>
</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ContactPage;