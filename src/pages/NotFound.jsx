import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
export default function NotFound() {
  return (
    <main id="main-content" className="container foundation" tabIndex={-1}>
      <SEO title="Page not found" noindex />
      <p className="eyebrow accent">404 / A wrong turn</p>
      <h1>
        This page has
        <br />
        <span className="serif">moved on.</span>
      </h1>
      <p className="muted">Let’s get you back to the work.</p>
      <div>
        <Link className="button" to="/">
          Back to portfolio <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </main>
  );
}
