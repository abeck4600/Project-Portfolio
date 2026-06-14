import "../styles/projects.css";

import type { Project } from "../types/Project structure";
import { ProjectCard } from "./ProjectCard";
import { ScrollableProjectsRow } from "./ScrollableProjectsRow";

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  const thesisProject = projects.find((project) => project.isThesis);
  const otherProjects = projects.filter((project) => !project.isThesis);

  function getSemesterAnchorId(semester: string) {
    const match = semester.match(/^\s*(\d+)\./);
    if (match) {
      return `semester-${match[1]}`;
    }
    return `semester-${semester.toLowerCase().replace(/\s+/g, "-")}`;
  }
  
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
  const semesterOrder = [
    "9. semester",
    "8. semester",
    "7. semester",
    "6. semester",
    "5. semester",
    "4. semester",
    "3. semester",
    "2. semester",
    "1. semester",
    "Other",
  ];
  const sortedSemesters = semesterOrder.filter((sem) => projectsBySemester[sem]);

  return (
    <>
      {thesisProject && (
        <section className="featured-thesis" id="master-project">
          <h2 className="project-section-title">Speciale</h2>
          <div className="featured-container">
            <ProjectCard project={thesisProject} featured key={thesisProject.title} />
          </div>
        </section>
      )}

      {sortedSemesters.map((semester) => (
        <section
          key={semester}
          className="semester-section"
          id={getSemesterAnchorId(semester)}
        >
          <h2 className="project-section-title">{semester}</h2>
          {semester === "8. semester" ? (
            <ScrollableProjectsRow
              projects={projectsBySemester[semester]}
              sectionLabel={semester}
            />
          ) : (
            <section
              className={`project-grid${semester === "9. semester" ? " project-grid--semester-9" : ""}`}
            >
              {projectsBySemester[semester].map((project) => (
                <ProjectCard
                  project={project}
                  featured={project.isFeatured}
                  key={project.title}
                />
              ))}
            </section>
          )}
        </section>
      ))}
    </>
  );
}