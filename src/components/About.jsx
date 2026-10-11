import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
export default function About() {
  return (
    <section
      id="about"
      className="section container about-section"
      tabIndex={-1}
      aria-label="About Sagar"
    >
      <Reveal>
        <SectionHeading number="02" label="The person behind the work">
          Curiosity first.
          <br />
          <span className="serif">Ownership always.</span>
        </SectionHeading>
      </Reveal>
      <div className="about-grid">
        <Reveal className="about-note">
          <div className="about-monogram" aria-hidden="true">
            gk<span className="serif">s.</span>
          </div>
          <p className="eyebrow">
            Developer. Problem solver.
            <br />
            Always a student.
          </p>
          <p className="about-location muted">Based in Bengaluru, India.</p>
        </Reveal>
        <Reveal className="about-copy">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a className="text-link" href={profile.resume} download>
            More in my resume <ArrowUpRight aria-hidden="true" />
          </a>
        </Reveal>
      </div>
      <div className="principles">
        {profile.principles.map((principle, i) => (
          <Reveal key={principle.title}>
            <p className="eyebrow accent">0{i + 1} / How I work</p>
            <h3>{principle.title}</h3>
            <p>{principle.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
