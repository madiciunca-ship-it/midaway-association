import { useParams } from "react-router-dom";
import GalleryRail from "../components/GalleryRail";

const gaudeamusContent = {
  ro: {
    eyebrow: "Primul proiect",

    title: "Midaway la Gaudeamus",

    intro:
      "Gaudeamus este primul loc în care Asociația Midaway își face apariția publică: acolo unde cărțile întâlnesc oameni, iar poveștile pot începe să circule mai departe.",

      liveLabel: "Sibiu · 20–23 august 2026",

    liveTitle:
      "Aici începe prima poveste a Asociației Midaway.",

    liveText:
      "Vom documenta lansări, întâlniri, conversații, imagini și momente de la fața locului — material viu din care pot porni proiectele viitoare ale Asociației Midaway.",

    gallery: [
      {
        src: "/gaudeamus/test/01.JPEG",
        alt: "Test galerie Gaudeamus 1",
      },
      {
        src: "/gaudeamus/test/02.JPEG",
        alt: "Test galerie Gaudeamus 2",
      },
      {
        src: "/gaudeamus/test/03.JPEG",
        alt: "Test galerie Gaudeamus 3",
      },
      {
        src: "/gaudeamus/test/04.JPEG",
        alt: "Test galerie Gaudeamus 4",
      },
      {
        src: "/gaudeamus/test/05.JPEG",
        alt: "Test galerie Gaudeamus 5",
      },
      {
        src: "/gaudeamus/test/06.jpeg",
        alt: "Test galerie Gaudeamus 6",
      },
    ],
    story: [],
    videos: [],
    quotes: [],
  },

  en: {
    eyebrow: "First project",

    title: "Midaway at Gaudeamus",

    intro:
      "Gaudeamus is the first place where Midaway Association steps into the public eye: where books meet people and stories can begin to travel further.",

    liveLabel: "Sibiu · 20–23 August 2026",

    liveTitle:
      "This is where Midaway’s first story begins.",

    liveText:
      "We will document launches, encounters, conversations, images, and moments on location — living material that may inspire future Midaway Association projects.",

    gallery: [],
    story: [],
    videos: [],
    quotes: [],
  },
};

function GaudeamusPage() {
  const { lang = "ro" } = useParams();
  const t = gaudeamusContent[lang] || gaudeamusContent.ro;

  return (
    <main className="gaudeamus-page">
  
      <section className="gaudeamus-hero">
        <div className="gaudeamus-hero-inner">
  
          <p className="gaudeamus-eyebrow">
            {t.eyebrow}
          </p>
  
          <h1 className="gaudeamus-title">
            {t.title}
          </h1>
  
          <p className="gaudeamus-intro">
            {t.intro}
          </p>
  
          <div className="gaudeamus-divider" />
  
          <p className="gaudeamus-location">
            {t.liveLabel}
          </p>
  
          <h2 className="gaudeamus-manifesto">
            {t.liveTitle}
          </h2>
  
          <p className="gaudeamus-live-text">
            {t.liveText}
          </p>
  
        </div>
      </section>
  
      {t.gallery.length > 0 && (
        <section className="gaudeamus-gallery">
          {/* GalleryRail va veni aici */}
        </section>
      )}
  
      {t.story.length > 0 && (
        <section className="gaudeamus-story">
          {/* povestea va crește aici */}
        </section>
      )}
  
      {t.videos.length > 0 && (
        <section className="gaudeamus-videos">
          {/* video */}
        </section>
      )}
  
      {t.quotes.length > 0 && (
        <section className="gaudeamus-quotes">
          {/* conversații / citate */}
        </section>
      )}

      <GalleryRail items={t.gallery} />

    </main>
  );
}

export default GaudeamusPage;