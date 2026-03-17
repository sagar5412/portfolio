import { motion } from "framer-motion";

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export function ProjectCard({ project, onOpen }) {
  return (
    <motion.div
      className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/8 bg-white/[0.03] backdrop-blur-sm transition-colors hover:border-white/15 hover:bg-white/[0.06]"
      onClick={() => onOpen(project)}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Image */}
      <div className="p-3 pb-0">
        <div className="overflow-hidden rounded-lg bg-black/40">
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-contain transition-transform duration-500 group-hover:scale-105"
            draggable={false}
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-3">
        <h3 className="text-base font-semibold text-white">{project.title}</h3>

        {/* Tech stack */}
        {project.technologies?.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="flex items-center gap-1 rounded-full bg-white/5 px-2 py-0.5 text-[11px] text-white/60"
              >
                <img src={tech.icon} alt={tech.name} className="w-3 h-3 object-contain" />
                {tech.name}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="mt-2 flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/50 transition-all hover:bg-white/15 hover:text-white"
              title="View Source"
            >
              <GithubIcon />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/50 transition-all hover:bg-white/15 hover:text-white"
              title="Live Demo"
            >
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>

      {/* Subtle glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-t from-purple-500/5 via-transparent to-transparent" />
    </motion.div>
  );
}