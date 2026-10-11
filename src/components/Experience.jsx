import { experience, education } from "../data/experience";
import { profile } from "../data/profile";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
export default function Experience() {
  return (
    <section
      id="experience"
      className="section container"
      tabIndex={-1}
      aria-label="Experience and education"
    >
      <Reveal>
        <SectionHeading number="04" label="Experience">
          Learning by <span className="serif">shipping.</span>
        </SectionHeading>
      </Reveal>
      {experience.map((job) => (
        <Reveal className="experience-row" key={job.company}>
          <div className="experience-meta">
            <p className="eyebrow accent">{job.period}</p>
            <p className="muted">{job.location}</p>
          </div>
          <div className="experience-content">
            <p className="eyebrow muted">{job.company}</p>
            <h3>
              {job.role}
              <span className="serif"> / {job.focus}</span>
            </h3>
            <p>{job.description}</p>
            <ul>
              {job.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
      <Reveal className="education-row">
        <p className="eyebrow muted">Foundation / {education.period}</p>
        <div>
          <h3>{education.qualification}</h3>
          <p className="muted">
            {education.institution} · {education.location}
          </p>
        </div>
        <a className="text-link" href={profile.resume} download>
          Full resume <ArrowUpRight aria-hidden="true" />
        </a>
      </Reveal>
    </section>
  );
}
