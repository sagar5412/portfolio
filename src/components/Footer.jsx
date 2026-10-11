import { profile } from "../data/profile";
export default function Footer() {
  return (
    <footer className="site-footer container">
      <p>
        © {new Date().getFullYear()} {profile.name} · Built with intention.
      </p>
      <div className="footer-links">
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub<span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn<span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a href={profile.resume} download>
          Resume
        </a>
      </div>
    </footer>
  );
}
