import "./Error.scss";
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <section className="error_page">
      <h1 className="error_page_title">404</h1>
      <h2 className="error_page_subtitle">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link title="Accueil" end to="/" className="error_page_link">
        Retourner sur la page d'accueil
      </Link>
    </section>
  );
}

export default ErrorPage;