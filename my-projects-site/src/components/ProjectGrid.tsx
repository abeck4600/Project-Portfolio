import "../styles/projects.css";

import type { Project } from "../types/Project structure";
import { ProjectCard } from "./ProjectCard";

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  const thesisProject = projects.find((project) => project.isThesis);
  const otherProjects = projects.filter((project) => !project.isThesis);
  
  // Group projects by semester
  const projectsBySemester = otherProjects.reduce(
    (acc, project) => {
      const semester = project.semester || "Other";
      if (!acc[semester]) {
        acc[semester] = [];
      }
      acc[semester].push(project);
      return acc;
    },
    {} as Record<string, Project[]>
  );

  // Sort semesters in order
  const semesterOrder = ["3. semester", "2. semester", "1. semester", "Other"];
  const sortedSemesters = semesterOrder.filter((sem) => projectsBySemester[sem]);

  return (
    <>
      {thesisProject && (
        <section className="featured-thesis">
          <h2 className="project-section-title">Speciale</h2>
          <div className="featured-container">
            <ProjectCard project={thesisProject} featured key={thesisProject.title} />
          </div>
        </section>
      )}

      {sortedSemesters.map((semester) => (
        <section key={semester} className="semester-section">
          <h2 className="project-section-title">{semester}</h2>
          <section
            className={`project-grid${semester === "2. semester" ? " project-grid--semester-2" : ""}`}
          >
            {projectsBySemester[semester].map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </section>
        </section>
      ))}
    </>
  );
}