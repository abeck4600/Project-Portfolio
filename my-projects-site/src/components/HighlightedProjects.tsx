import "../styles/projects.css";

import type { Project } from "../types/Project structure";
import { ProjectCard } from "./ProjectCard";

type HighlightedProjectsProps = {
  projects: Project[];
};

export function HighlightedProjects({ projects }: HighlightedProjectsProps) {
  const highlightedProjects = projects.filter(
    (project) => project.isHighlighted
  );

  if (highlightedProjects.length === 0) {
    return null;
  }

  return (
    <section className="highlighted-section" id="highlighted-projects">
      <h2 className="project-section-title">Highlighted Projects</h2>
      <section className="project-grid highlighted-grid">
        {highlightedProjects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </section>
    </section>
  );
}
