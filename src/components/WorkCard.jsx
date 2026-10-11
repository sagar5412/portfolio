import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectVisual from "./ProjectVisual";
/** @param {{project: (typeof import('../data/projects').projects)[number], featured?: boolean}} props */
export default function WorkCard({ project, featured = false }) {
  return (
    <article className={`work-card${featured ? " work-featured" : ""}`}>
      {project.visual === "screenshot" ? (
        <Link
          className="work-visual-link"
          to={`/work/${project.slug}`}
          aria-label={`Read ${project.title} case study`}
          tabIndex={-1}
        >
          <ProjectVisual project={project} featured={featured} />
        </Link>
      ) : (
        <div className="work-visual-link">
          <ProjectVisual project={project} featured={featured} />
        </div>
      )}
      <div className="work-content">
        <p className="eyebrow work-category">
          <span className="accent">/{project.number}</span>
          <span>{project.category}</span>
        </p>
        <h3 id={`work-title-${project.slug}`}>
          <Link to={`/work/${project.slug}`}>
            {project.shortTitle}
            <ArrowUpRight className="work-arrow" aria-hidden="true" />
          </Link>
        </h3>
        <p className="work-summary">{project.summary}</p>
        <p className="work-metric">{project.metric}</p>
        <ul
          className="stack-tags"
          aria-label={`${project.title} technology stack`}
        >
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <Link className="text-link" to={`/work/${project.slug}`}>
          Read case study<span className="sr-only">: {project.title}</span>
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
