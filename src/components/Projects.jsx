import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { projectsData } from "../data/projectsData";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-white mb-6">Projects</h2>

      {/* Card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={setSelectedProject}
          />
        ))}
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}