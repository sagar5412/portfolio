import { useId } from "react";

/** @param {{item: (typeof import('../data/projects').projects)[number]['gallery'][number]}} props */
export default function GalleryIllustration({ item }) {
  const patternId = useId();
  const isLight = item.visual === "hierarchy";
  return (
    <div
      className={`gallery-illustration gallery-${item.visual}${isLight ? " gallery-light" : ""}`}
      role="img"
      aria-label={item.alt}
    >
      <p className="gallery-art-label eyebrow" aria-hidden="true">
        {item.label}
      </p>
      <svg
        className="gallery-art"
        viewBox="0 0 720 310"
        fill="none"
        aria-hidden="true"
      >
        {item.visual === "whiteboard" && (
          <>
            <defs>
              <pattern
                id={patternId}
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="0.9" className="canvas-grid-dot" />
              </pattern>
            </defs>
            <rect
              x="40"
              y="15"
              width="640"
              height="280"
              fill={`url(#${patternId})`}
            />
            <path
              d="M40 69V35h34m572 0h34v34M40 246v34h34m572 0h34v-34"
              className="gallery-line"
            />
            <g transform="rotate(-5 172 125)">
              <rect
                x="118"
                y="76"
                width="108"
                height="88"
                className="gallery-paper"
              />
              <path
                d="M137 103h70m-70 17h52m-52 17h61"
                className="gallery-line"
              />
            </g>
            <path
              d="M228 120h68m116 0h86m-138 55v46h139m-210-107 8 6-8 6m192-12 8 6-8 6"
              className="gallery-line"
            />
            <path
              d="m360 64 56 56-56 56-56-56z"
              className="gallery-accent-stroke"
            />
            <circle cx="539" cy="120" r="40" className="gallery-line" />
            <path d="M521 120h36m-18-18v36" className="gallery-line" />
            <path
              d="M105 219c34-46 44 36 83-3s46 5 66-19"
              className="gallery-freehand"
            />
            <path
              d="M516 216c20-29 81-26 86 0 8 32-98 44-86 0z"
              className="gallery-line"
            />
            <g className="gallery-tool-palette">
              <rect
                x="223"
                y="261"
                width="274"
                height="34"
                rx="3"
                className="gallery-paper"
              />
              <path
                d="m240 272 2 12 4-5 5-2zM273 271h13v13h-13z"
                className="gallery-line"
              />
              <circle cx="317" cy="278" r="7" className="gallery-line" />
              <path
                d="m354 270 8 8-8 8-8-8zM388 278h17m-5-5 5 5-5 5M433 270h14m-7 0v15m33-13 5-3 6 9-5 3z"
                className="gallery-line"
              />
            </g>
          </>
        )}
        {item.visual === "hierarchy" && (
          <>
            <path
              d="M302 99h89v132m0-77h46m-46 77h46"
              className="gallery-tree-line"
            />
            <g transform="rotate(-4 235 114)">
              <rect
                x="151"
                y="35"
                width="164"
                height="185"
                className="gallery-paper"
              />
              <path d="M279 35h14v35l-7-8-7 8z" className="notes-bookmark" />
              <text x="174" y="85" className="gallery-node-title">
                {item.nodes[0]}
              </text>
              <path
                d="M174 109h116m-116 14h99m-99 14h110m-110 38h73"
                className="gallery-copy-line"
              />
            </g>
            <g transform="rotate(3 513 118)">
              <rect
                x="437"
                y="52"
                width="156"
                height="128"
                className="gallery-paper"
              />
              <text x="458" y="94" className="gallery-node-title">
                {item.nodes[1]}
              </text>
              <path
                d="M458 114h112m-112 15h83m-83 15h102"
                className="gallery-copy-line"
              />
            </g>
            <g transform="rotate(-2 513 235)">
              <rect
                x="437"
                y="198"
                width="156"
                height="95"
                className="gallery-paper"
              />
              <text x="458" y="236" className="gallery-node-title">
                {item.nodes[2]}
              </text>
              <path d="M458 255h112m-112 14h72" className="gallery-copy-line" />
            </g>
            <circle cx="391" cy="154" r="4" className="notes-bookmark" />
            <circle cx="391" cy="231" r="4" className="notes-bookmark" />
          </>
        )}
        {item.visual === "editor" && (
          <>
            <g transform="rotate(-3 352 155)">
              <rect
                x="215"
                y="23"
                width="270"
                height="269"
                className="gallery-paper"
              />
              <path
                d="M240 65h120m-120 16h167m-167 31h219m-219 14h190m-190 14h203"
                className="gallery-line"
              />
              <rect
                x="240"
                y="167"
                width="218"
                height="56"
                className="gallery-accent-stroke"
              />
              <path
                d="M258 183h83m-73 12h139m-139 12h108m-108 39h160m-160 14h128"
                className="gallery-line"
              />
            </g>
            <path
              d="M161 85h54m270 69h65m-389 94h54"
              className="gallery-line"
            />
            <g transform="rotate(-7 126 85)">
              <rect
                x="88"
                y="47"
                width="76"
                height="76"
                className="gallery-paper"
              />
              <text
                x="126"
                y="97"
                textAnchor="middle"
                className="gallery-block-title"
              >
                {item.blocks[0]}
              </text>
            </g>
            <g transform="rotate(7 587 154)">
              <rect
                x="549"
                y="116"
                width="76"
                height="76"
                className="gallery-accent-card"
              />
              <text
                x="587"
                y="169"
                textAnchor="middle"
                className="gallery-block-title gallery-accent-text"
              >
                {item.blocks[1]}
              </text>
            </g>
            <g transform="rotate(4 126 247)">
              <rect
                x="88"
                y="209"
                width="76"
                height="76"
                className="gallery-paper"
              />
              <text
                x="126"
                y="256"
                textAnchor="middle"
                className="gallery-code-title"
              >
                {item.blocks[2]}
              </text>
            </g>
          </>
        )}
      </svg>
      <div className="gallery-art-bottom" aria-hidden="true">
        <p>
          {item.heading}
          <br />
          <span className="serif">{item.emphasis}</span>
        </p>
        <ul className="gallery-art-details eyebrow">
          {item.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
