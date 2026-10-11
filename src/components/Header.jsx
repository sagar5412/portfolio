import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";
export default function Header() {
  return (
    <header className="site-header container">
      <Link className="brand" to="/" aria-label={`s. ${profile.name} - home`}>
        <span className="brand-mark" aria-hidden="true">
          s.
        </span>
        <span>{profile.name}</span>
      </Link>
      <nav className="header-nav" aria-label="Main navigation">
        <Link to="/#work">Work</Link>
        <Link className="nav-about" to="/#about">
          About
        </Link>
        <Link to="/#experience">Experience</Link>
        <Link className="nav-contact" to="/#contact">
          Let’s talk <ArrowUpRight aria-hidden="true" />
        </Link>
      </nav>
    </header>
  );
}
