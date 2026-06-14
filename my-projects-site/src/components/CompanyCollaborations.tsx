import "../styles/projects.css";

import type { Project } from "../types/Project structure";
import { ScrollableProjectsRow } from "./ScrollableProjectsRow";

type CompanyCollaborationsProps = {
  projects: Project[];
};

export function CompanyCollaborations({ projects }: CompanyCollaborationsProps) {
  const collaborationProjects = projects.filter(
    (project) => project.isCompanyCollaboration
  );

  if (collaborationProjects.length === 0) {
    return null;
  }

  return (
    <section className="company-collaborations-section" id="company-collaborations">
      <h2 className="project-section-title">Company collaborations</h2>
      <ScrollableProjectsRow
        projects={collaborationProjects}
        sectionLabel="Company collaborations"
      />
    </section>
  );
}
