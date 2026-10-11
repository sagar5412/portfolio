import { ArrowDown, ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { profile } from "../data/profile";
import ProjectVisual from "../components/ProjectVisual";
import GalleryIllustration from "../components/GalleryIllustration";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO";
import NotFound from "./NotFound";

export default function CaseStudy() {
  const { slug } = useParams();
  const index = projects.findIndex((project) => project.slug === slug);
  const project = projects[index];
  if (!project) return <NotFound />;
  const next = projects[(index + 1) % projects.length];
  return (
    <main id="main-content" tabIndex={-1}>
      <SEO
        title={project.title}
        description={project.summary}
        path={`/work/${project.slug}`}
      />
      <div className="container">
        <div className="case-topline">
          <Link className="case-back" to="/#work">
            <ArrowLeft aria-hidden="true" />
            All selected work
          </Link>
          <p className="eyebrow muted">Case study / {project.number}</p>
        </div>
        <header className="case-header">
          <p className="eyebrow accent">
            {project.category} / {project.kind}
          </p>
          <h1>{project.title}</h1>
          <p className="case-deck">{project.summary}</p>
          <div className="case-meta">
            <div>
              <p className="eyebrow muted">My role</p>
              <p>{project.role}</p>
            </div>
            <div>
              <p className="eyebrow muted">Context</p>
              <p>{project.period}</p>
            </div>
            <div className="case-links">
              {project.live && (
                <a
                  className="text-link"
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live project <ArrowUpRight aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
              {project.github && (
                <a
                  className="text-link"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code <ArrowUpRight aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
              {!project.live && (
                <a className="text-link" href="#case-problem">
                  Explore the thinking <ArrowDown aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </header>
        <figure className="case-main-visual">
          <ProjectVisual project={project} featured />
          <figcaption>
            {project.visual === "screenshot"
              ? `${project.title} · Product screenshot`
              : project.diagram?.caption ||
                "An explanatory overview of the system, based on the delivered workflow."}
          </figcaption>
        </figure>
        <section
          id="case-problem"
          className="case-section"
          aria-labelledby="problem-title"
        >
          <div className="case-section-label">
            <p className="eyebrow accent">01 / The problem</p>
            <h2 id="problem-title">
              Where it
              <br />
              <span className="serif">started.</span>
            </h2>
          </div>
          <Reveal className="case-section-body">
            <p className="case-lead">{project.problem}</p>
            <h3>What I owned</h3>
            <p>{project.responsibility}</p>
            <ul className="stack-tags" aria-label="Project technology stack">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </Reveal>
        </section>
        <section className="case-section" aria-labelledby="process-title">
          <div className="case-section-label">
            <p className="eyebrow accent">02 / The process</p>
            <h2 id="process-title">
              Decisions
              <br />
              <span className="serif">that mattered.</span>
            </h2>
          </div>
          <div className="case-section-body process-list">
            {project.process.map((step, i) => (
              <Reveal className="process-step" key={step.title}>
                <span className="eyebrow muted">0{i + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
        <section className="case-section" aria-labelledby="result-title">
          <div className="case-section-label">
            <p className="eyebrow accent">03 / The result</p>
            <h2 id="result-title">
              What
              <br />
              <span className="serif">shipped.</span>
            </h2>
          </div>
          <Reveal className="case-section-body">
            <div className="case-results">
              {project.results.map((result) => (
                <div key={result.label}>
                  <span>{result.value}</span>
                  <p>{result.label}</p>
                </div>
              ))}
            </div>
            <p className="case-outcome">{project.outcome}</p>
            <div className="case-takeaway">
              <p className="eyebrow accent">The takeaway</p>
              <p>{project.takeaway}</p>
            </div>
          </Reveal>
        </section>
        {project.gallery.length > 0 && (
          <section className="case-gallery" aria-label="Project illustrations">
            {project.gallery.map((img) => (
              <Reveal key={img.id || img.src}>
                <figure>
                  {img.visual ? (
                    <GalleryIllustration item={img} />
                  ) : (
                    <div className="gallery-frame">
                      <img
                        src={img.src}
                        srcSet={`${img.small} 640w, ${img.src} 1200w`}
                        sizes="(max-width: 600px) 90vw, 80vw"
                        width={img.width}
                        height={img.height}
                        alt={img.alt}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  )}
                  <figcaption>{img.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </section>
        )}
        <nav className="case-next" aria-label="Next case study">
          <p className="eyebrow muted">Next / Keep exploring</p>
          <Link to={`/work/${next.slug}`}>
            <span>{next.title}</span>
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </nav>
        <div className="case-contact">
          <p>Have a problem worth solving?</p>
          <a className="text-link" href={`mailto:${profile.email}`}>
            Let’s talk <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </main>
  );
}
