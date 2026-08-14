import { useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { lang = "ro" } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  function changeLanguage(nextLang) {
    const parts = location.pathname.split("/");

    parts[1] = nextLang;

    navigate(parts.join("/") || `/${nextLang}`);
  }

  return (
    <>
      <header className="header">
        <div className="header-brand">
          <div className="brand">
            <img
              src="/association-mark.png"
              alt=""
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
        </div>

        <nav className="header-nav">
          <a href={`/${lang}`}>
            {lang === "ro" ? "Acasă" : "Home"}
          </a>

          <a href={`/${lang}/proiecte`}>
            {lang === "ro" ? "Proiecte" : "Projects"}
          </a>

          <a href={`/${lang}/parteneriate`}>
  {lang === "ro" ? "Parteneriate" : "Partnerships"}
</a>

<a href={`/${lang}/contact`}>
  {lang === "ro" ? "Contact" : "Contact"}
</a>
        </nav>

        <div className="header-actions">
          <div
            className="lang-switch"
            aria-label="Language selector"
          >
            <button
              type="button"
              className={lang === "ro" ? "active" : ""}
              onClick={() => changeLanguage("ro")}
              aria-pressed={lang === "ro"}
            >
              RO
            </button>

            <button
              type="button"
              className={lang === "en" ? "active" : ""}
              onClick={() => changeLanguage("en")}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>

          <button
  type="button"
  className="menu-toggle"
  aria-label={menuOpen ? "Close menu" : "Open menu"}
  aria-expanded={menuOpen}
  onClick={() =>
    setMenuOpen((open) => !open)
  }
>
  {menuOpen ? "✕" : "☰"}
</button>
        </div>
      </header>

      {menuOpen && (
        <nav className="mobile-menu">
          <a
            href={`/${lang}`}
            onClick={() => setMenuOpen(false)}
          >
            {lang === "ro" ? "Acasă" : "Home"}
          </a>

          <a
            href={`/${lang}/proiecte`}
            onClick={() => setMenuOpen(false)}
          >
            {lang === "ro" ? "Proiecte" : "Projects"}
          </a>

          <a
  href={`/${lang}/parteneriate`}
  onClick={() => setMenuOpen(false)}
>
  {lang === "ro" ? "Parteneriate" : "Partnerships"}
</a>

<a
  href={`/${lang}/contact`}
  onClick={() => setMenuOpen(false)}
>
  Contact
</a>
        </nav>
      )}
    </>
  );
}

export default Header;