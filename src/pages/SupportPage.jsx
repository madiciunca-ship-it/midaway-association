import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo.jsx";

const supportContent = {
  ro: {
    eyebrow: "Susține Midaway",

    title:
      "Unele povești au nevoie de oameni care să le ajute să ajungă mai departe.",

    intro:
      "Asociația Midaway dezvoltă proiecte editoriale, culturale, educaționale și interculturale. Le poți susține printr-o donație, o sponsorizare, resurse, timp sau experiență.",

    donationTitle: "Donații",

    donationText:
      "Poți susține direct proiectele Asociației Midaway prin transfer bancar. Orice contribuție ne ajută să transformăm ideile în proiecte care ajung la oameni.",

    
      bankNameLabel: "Banca",
      bankName: "Banca Transilvania",
      
      accountHolderLabel: "Beneficiar",
      accountHolder: "Asociația MIDAWAY",
      
      ronLabel: "Cont RON",
      ronIban: "RO93BTRLRONCRT0DG5517901",
      
      eurLabel: "Cont EUR",
      eurIban: "RO40BTRLEURCRT0DG5517901",

      copyIban: "Apasă pentru a copia",
copiedIban: "Copiat!",

    sponsorshipTitle:
      "Sponsorizări și parteneriate",

    sponsorshipText:
      "Companiile, organizațiile și instituțiile pot susține proiectele Midaway prin sponsorizări, resurse sau parteneriate construite în jurul unui proiect concret.",

    sponsorshipNote:
      "Pentru documentație, contracte de sponsorizare și detalii administrative, scrie-ne.",

    sponsorshipCta:
      "Vorbește cu noi",

    volunteerTitle:
      "Voluntariat",

    volunteerText:
      "Midaway va avea nevoie și de oameni care vor să se implice în evenimente, documentarea proiectelor, fotografie și video, traduceri, proiecte editoriale, educație sau organizare.",

    volunteerNote:
      "Dacă simți că experiența ta s-ar potrivi unui proiect Midaway, scrie-ne câteva rânduri despre tine.",

    volunteerCta:
      "Scrie-ne",
  },

  en: {
    eyebrow: "Support Midaway",

    title:
      "Some stories need people to help them go further.",

    intro:
      "Midaway Association develops editorial, cultural, educational and intercultural projects. You can support them through donations and sponsorships, or by contributing resources, time or expertise.",

    donationTitle: "Donations",

    donationText:
      "You can support Midaway Association projects directly by bank transfer. Every contribution helps us turn ideas into projects that reach people.",

      bankNameLabel: "Bank",
      bankName: "Banca Transilvania",
      
      accountHolderLabel: "Account holder",
      accountHolder: "Asociația MIDAWAY",
      
      ronLabel: "RON account",
      ronIban: "RO93BTRLRONCRT0DG5517901",
      
      eurLabel: "EUR account",
      eurIban: "RO40BTRLEURCRT0DG5517901",

      copyIban: "Tap to copy",
copiedIban: "Copied!",

    sponsorshipTitle:
      "Sponsorships and partnerships",

    sponsorshipText:
      "Companies, organisations and institutions can support Midaway projects through sponsorships, by contributing resources, or through partnerships built around specific projects.",

    sponsorshipNote:
      "For documentation, sponsorship agreements or administrative details, get in touch with us.",

    sponsorshipCta:
      "Talk to us",

    volunteerTitle:
      "Volunteering",

    volunteerText:
      "Midaway will also need people who want to get involved in events, project documentation, photography and video, translation, editorial projects, education or organisation.",

    volunteerNote:
      "If you feel your experience could contribute to a Midaway project, tell us a little about yourself.",

    volunteerCta:
      "Write to us",
  },
};

function SupportPage() {
  const { lang = "ro" } = useParams();
  const [copiedIban, setCopiedIban] = useState(null);

  const t =
    supportContent[lang] ||
    supportContent.ro;

    const copyIban = async (iban) => {
        try {
          await navigator.clipboard.writeText(iban);
          setCopiedIban(iban);
    
          setTimeout(() => {
            setCopiedIban(null);
          }, 1500);
        } catch (error) {
          console.error("IBAN could not be copied:", error);
        }
      };

  return (
    <>
      <Seo
        lang={lang}
        path="/sustine"
        title={
          lang === "ro"
            ? "Susține Midaway | Asociația Midaway"
            : "Support Midaway | Midaway Association"
        }
        description={
          lang === "ro"
            ? "Susține proiectele Asociației Midaway prin donații, sponsorizări, parteneriate sau voluntariat."
            : "Support Midaway Association projects through donations, sponsorships, partnerships or volunteering."
        }
      />

      <main className="support-page">
        <section className="support-hero">
          <div className="support-inner">
            <div className="support-divider" />

            <p className="support-eyebrow">
              {t.eyebrow}
            </p>

            <h1 className="support-title">
              {t.title}
            </h1>

            <p className="support-intro">
              {t.intro}
            </p>
          </div>
        </section>

        <section className="support-section">
          <div className="support-inner">
            <div className="support-divider teal" />

            <h2>
              {t.donationTitle}
            </h2>

            <p className="support-text">
              {t.donationText}
            </p>

            <div className="support-bank-placeholder">
  <div className="support-bank-row">
    <span>{t.accountHolderLabel}</span>
    <strong>{t.accountHolder}</strong>
  </div>

  <div className="support-bank-row">
    <span>{t.bankNameLabel}</span>
    <strong>{t.bankName}</strong>
  </div>

  <div className="support-bank-row">
  <span>{t.ronLabel}</span>

  <button
    type="button"
    className="support-iban"
    onClick={() => copyIban(t.ronIban)}
    title={t.copyIban}
    aria-label={`${t.copyIban}: ${t.ronIban}`}
  >
    <span className="support-iban-number">
      {t.ronIban}
    </span>

    <span className="support-copy-status">
      {copiedIban === t.ronIban
        ? t.copiedIban
        : t.copyIban}
    </span>
  </button>
</div>

<div className="support-bank-row">
  <span>{t.eurLabel}</span>

  <button
    type="button"
    className="support-iban"
    onClick={() => copyIban(t.eurIban)}
    title={t.copyIban}
    aria-label={`${t.copyIban}: ${t.eurIban}`}
  >
    <span className="support-iban-number">
      {t.eurIban}
    </span>

    <span className="support-copy-status">
      {copiedIban === t.eurIban
        ? t.copiedIban
        : t.copyIban}
    </span>
  </button>
</div>
</div>
          </div>
        </section>

        <section className="support-section support-soft">
          <div className="support-inner">
            <div className="support-divider gold" />

            <h2>
              {t.sponsorshipTitle}
            </h2>

            <p className="support-text">
              {t.sponsorshipText}
            </p>

            <p className="support-note">
              {t.sponsorshipNote}
            </p>

            <Link
              to={`/${lang}/contact`}
              className="primary-button"
            >
              {t.sponsorshipCta}
            </Link>
          </div>
        </section>

        <section className="support-section">
          <div className="support-inner">
            <div className="support-divider teal" />

            <h2>
              {t.volunteerTitle}
            </h2>

            <p className="support-text">
              {t.volunteerText}
            </p>

            <p className="support-note">
              {t.volunteerNote}
            </p>

            <Link
              to={`/${lang}/contact`}
              className="primary-button"
            >
              {t.volunteerCta}
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default SupportPage;