import { useParams } from "react-router-dom";

function Footer() {
  const { lang = "ro" } = useParams();

  return (
    <footer className="footer">
      <div>
        © 2026 ASOCIAȚIA MIDAWAY
      </div>

      <div>
        {lang === "ro" ? "Contact:" : "Contact:"}{" "}
        <a href="mailto:office@midaway.ro">
          office@midaway.ro
        </a>
      </div>
    </footer>
  );
}

export default Footer;