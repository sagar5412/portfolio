import { ArrowRight, Check, FileText } from "lucide-react";
import { useId } from "react";
/** @param {{project: (typeof import('../data/projects').projects)[number], featured?: boolean}} props */
export default function ProjectVisual({ project, featured = false }) {
  const patternId = useId();
  const diagram = project.diagram;
  if (project.visual === "canvas")
    return (
      <div
        className="project-visual canvas-visual"
        role="img"
        aria-label={diagram.alt}
      >
        <div className="canvas-top eyebrow" aria-hidden="true">
          <span>{diagram.header}</span>
          <span className="canvas-live">{diagram.status}</span>
        </div>
        <svg
          className="canvas-art"
          viewBox="0 0 560 260"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id={patternId}
              width="22"
              height="22"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="0.8" className="canvas-grid-dot" />
            </pattern>
          </defs>
          <rect width="560" height="260" fill={`url(#${patternId})`} />
          <path
            d="M164 112h82m104 0h72M298 159v54h126"
            className="canvas-connector"
          />
          <path
            d="m235 106 11 6-11 6m176-12 11 6-11 6m-11 89 11 8-11 8"
            className="canvas-connector"
          />
          <g transform="rotate(-7 111 112)">
            <rect
              x="56"
              y="67"
              width="109"
              height="89"
              rx="3"
              className="canvas-node"
            />
            <path
              d="M76 94h62m-62 16h45m-45 16h53"
              className="canvas-sketch-line"
            />
          </g>
          <path
            d="m297 59 53 53-53 53-53-53z"
            className="canvas-node canvas-node-accent"
          />
          <circle cx="455" cy="112" r="34" className="canvas-node" />
          <path d="M443 112h24m-12-12v24" className="canvas-sketch-line" />
          <path
            d="M59 205c29-34 41 29 72-1s33-10 48-10"
            className="canvas-freehand"
          />
          <path
            d="M429 200c12-14 37-16 56-8 24 11 16 33-10 35-34 4-61-11-46-27z"
            className="canvas-freehand canvas-loop"
          />
          <g transform="translate(170 143)">
            <path d="m0 0 5 29 8-10 12-3z" className="canvas-cursor" />
            <rect
              x="21"
              y="26"
              width="54"
              height="22"
              rx="2"
              className="canvas-cursor-tag"
            />
            <text
              x="48"
              y="41"
              textAnchor="middle"
              className="canvas-cursor-text"
            >
              {diagram.cursors[0]}
            </text>
          </g>
          <g transform="translate(346 39)">
            <path
              d="m0 0 5 29 8-10 12-3z"
              className="canvas-cursor canvas-cursor-peer"
            />
            <rect
              x="21"
              y="26"
              width="76"
              height="22"
              rx="2"
              className="canvas-cursor-tag canvas-cursor-peer"
            />
            <text
              x="59"
              y="41"
              textAnchor="middle"
              className="canvas-cursor-text canvas-peer-text"
            >
              {diagram.cursors[1]}
            </text>
          </g>
        </svg>
        <div className="canvas-bottom" aria-hidden="true">
          <p>
            {diagram.heading} <span className="serif">{diagram.emphasis}</span>
          </p>
          <div className="visual-details eyebrow">
            {diagram.details.map((detail) => (
              <span key={detail}>{detail}</span>
            ))}
          </div>
        </div>
      </div>
    );
  if (project.visual === "notes")
    return (
      <div
        className="project-visual notes-visual"
        role="img"
        aria-label={diagram.alt}
      >
        <div className="notes-top eyebrow" aria-hidden="true">
          <span>{diagram.header}</span>
          <span>{diagram.status}</span>
        </div>
        <svg
          className="notes-art"
          viewBox="64 0 440 280"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M88 98v92m0-83h14m-14 27h14m-14 27h14m-14 27h14M109 107h43m-36 27h33m-33 27h33m-40 27h43"
            className="notes-tree-line"
          />
          <rect
            x="157"
            y="30"
            width="290"
            height="220"
            transform="rotate(9 302 140)"
            className="notes-sheet-back"
          />
          <rect
            x="157"
            y="30"
            width="290"
            height="220"
            transform="rotate(-9 302 140)"
            className="notes-sheet"
          />
          <g transform="rotate(-3 302 140)">
            <rect
              x="157"
              y="30"
              width="290"
              height="220"
              className="notes-sheet"
            />
            <path d="M413 30h14v37l-7-8-7 8z" className="notes-bookmark" />
            <text x="181" y="64" className="notes-page-label">
              {diagram.pageLabel}
            </text>
            <text x="181" y="105" className="notes-page-title">
              {diagram.pageTitle}
            </text>
            <path
              d="M181 122h242m-242 13h242m-242 13h172"
              className="notes-copy-line"
            />
            <path
              d="M181 168v16m12-13h8v8h-8zM213 175h159"
              className="notes-accent-line"
            />
            <path d="M181 202h200m-200 13h152" className="notes-copy-line" />
          </g>
        </svg>
        <div className="notes-bottom" aria-hidden="true">
          <p>
            {diagram.heading}
            <br />
            <span className="serif">{diagram.emphasis}</span>
          </p>
          <div className="visual-details eyebrow">
            {diagram.details.map((detail) => (
              <span key={detail}>{detail}</span>
            ))}
          </div>
        </div>
      </div>
    );
  if (project.visual === "screenshot")
    return (
      <div className={`project-visual screenshot-visual ${project.slug}`}>
        <img
          src={project.image}
          srcSet={`${project.imageSmall} 640w, ${project.image} 1200w`}
          sizes={
            featured
              ? "(max-width: 600px) 90vw, 55vw"
              : "(max-width: 600px) 90vw, 45vw"
          }
          width={project.width}
          height={project.height}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  if (project.visual === "analytics")
    return (
      <div className="project-visual analytics-visual">
        <div className="visual-header eyebrow">
          <span>{diagram.header}</span>
          <span className="visual-status">{diagram.status}</span>
        </div>
        <div className="analytics-core">
          <span className="diagram-orbit" aria-hidden="true" />
          <p className="analytics-number">
            {diagram.value}
            <span>{diagram.unit}</span>
          </p>
          <div className="analytics-target">
            <span className="eyebrow">{diagram.state}</span>
            <p>
              {diagram.heading}
              <br />
              <span className="serif">{diagram.emphasis}</span>
            </p>
          </div>
        </div>
        <div className="diagram-flow">
          {project.flow.slice(1).map((step, i) => (
            <div className="flow-step" key={step}>
              <span className="flow-index">0{i + 1}</span>
              <span>{step}</span>
              {i < 2 && <ArrowRight aria-hidden="true" />}
            </div>
          ))}
        </div>
        <p className="visual-caption">{diagram.caption}</p>
      </div>
    );
  if (project.visual === "invoice")
    return (
      <div className="project-visual invoice-visual">
        <div className="invoice-sheet" aria-hidden="true">
          <div className="invoice-sheet-heading">
            <FileText />
            <span className="eyebrow">{diagram.header}</span>
          </div>
          <div className="invoice-lines">
            <span />
            <span />
            <span />
          </div>
          <div className="invoice-check">
            <Check />
            <span>{diagram.workflow}</span>
          </div>
          <div className="invoice-lines short">
            <span />
            <span />
          </div>
        </div>
        <div className="invoice-side">
          <span className="eyebrow">
            {diagram.heading}
            <br />
            {diagram.continuation}
          </span>
          <span className="serif">
            {diagram.value}
            <br />
            {diagram.emphasis}
          </span>
        </div>
      </div>
    );
  return (
    <div className="project-visual quiz-visual">
      <div className="quiz-top eyebrow">
        <span className="quiz-live">{diagram.header}</span>
        <span>{diagram.event}</span>
      </div>
      <div className="quiz-center">
        <span className="quiz-orbit" aria-hidden="true" />
        <p>
          {diagram.value}
          <span>{diagram.suffix}</span>
        </p>
        <span className="eyebrow">{diagram.caption}</span>
      </div>
      <p className="quiz-bottom">
        {diagram.steps.map((step, index) => (
          <span key={step}>
            {step}
            {index < diagram.steps.length - 1 && (
              <span aria-hidden="true"> →</span>
            )}
          </span>
        ))}
      </p>
    </div>
  );
}
