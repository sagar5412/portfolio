import { projects } from "../data/projects";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import WorkCard from "./WorkCard";
export default function SelectedWork() {
  return (
    <section
      id="work"
      className="section container selected-work"
      tabIndex={-1}
      aria-label="Selected work"
    >
      <Reveal>
        <SectionHeading
          number="01"
          label="Selected work"
          description="Production systems and independent projects. A few problems I’ve taken from an idea to a working product."
        >
          Built to be <span className="serif">used.</span>
        </SectionHeading>
      </Reveal>
      <Reveal>
        <WorkCard project={projects[0]} featured />
      </Reveal>
      <div className="work-grid">
        {projects.slice(1).map((project) => (
          <Reveal key={project.slug}>
            <WorkCard project={project} />
          </Reveal>
        ))}
      </div>
      <p className="work-footnote eyebrow muted">
        A closer look at the thinking, the tradeoffs, and the delivery.
      </p>
    </section>
  );
}
