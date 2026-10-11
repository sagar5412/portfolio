import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";
function BuildMark() {
  return (
    <div className="build-mark" aria-hidden="true">
      <svg viewBox="0 0 240 240" fill="none">
        <circle cx="120" cy="120" r="99" className="mark-outline" />
        <circle cx="120" cy="120" r="67" className="mark-outline" />
        <path
          d="M120 7v226M7 120h226M40 40l160 160M40 200L200 40"
          className="mark-guide"
        />
        <g className="mark-star" fill="currentColor">
          <path d="M113 50h14v140h-14z" />
          <path d="M50 113h140v14H50z" />
          <path d="m75.45 65.55 99 99-9.9 9.9-99-99z" />
          <path d="m65.55 164.55 99-99 9.9 9.9-99 99z" />
        </g>
        <circle cx="120" cy="21" r="4" fill="currentColor" />
        <circle cx="219" cy="120" r="4" fill="currentColor" />
        <circle cx="120" cy="120" r="20" className="mark-core" />
      </svg>
      <p className="eyebrow">Think. Build. Ship.</p>
    </div>
  );
}
export default function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-topline">
        <p className="eyebrow">{profile.role}</p>
        <p className="eyebrow muted">
          <span className="location-dot" />
          {profile.location}
        </p>
      </div>
      <div className="hero-grid">
        <div className="hero-heading">
          <h1 id="hero-title">
            Reliable
            <br />
            software.
            <br />
            <span className="serif">Real-world impact.</span>
          </h1>
          <div className="hero-actions">
            <a className="button" href="#work">
              Explore my work <ArrowDown aria-hidden="true" />
            </a>
            <a className="text-link" href={profile.resume} download>
              Download resume <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hero-aside">
          <BuildMark />
          <p className="hero-intro">{profile.intro}</p>
          <p className="hero-note eyebrow muted">
            From first principles
            <br />
            to production.
          </p>
        </div>
      </div>
      <div className="proof-strip" aria-label="Production experience">
        {profile.proof.map((item) => (
          <div className="proof-item" key={item.label}>
            <span className="proof-value">{item.value}</span>
            <div>
              <p className="proof-label">{item.label}</p>
              <p className="proof-detail">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
