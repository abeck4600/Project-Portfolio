import "../styles/projects.css";

import type { Project } from "../types/Project structure";
import { ProjectCard } from "./ProjectCard";

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  const thesisProject = projects.find((project) => project.isThesis);
  const remainingProjects = projects.filter((project) => !project.isThesis);

  return (
    <>
      {thesisProject && (
        <section className="featured-thesis">
          <h2 className="project-section-title">Speciale</h2>
          <ProjectCard project={thesisProject} featured key={thesisProject.title} />
        </section>
      )}

      <section>
        <h2 className="project-section-title">Oevrige projekter</h2>
        <section className="project-grid">
          {remainingProjects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </section>
      </section>
    </>
  );
}