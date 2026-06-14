import "../styles/projects.css";
import { useEffect } from "react";

import type { Project } from "../types/Project structure";
import { CompanyCollaborations } from "./CompanyCollaborations";
import { ProjectGrid } from "./ProjectGrid";

type AllProjectsTabProps = {
  projects: Project[];
};

export function AllProjectsTab({ projects }: AllProjectsTabProps) {
  useEffect(() => {
    function scrollToHashTarget() {
      const hash = window.location.hash;
      if (!hash) return;

      const targetId = decodeURIComponent(hash.slice(1));
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const timeoutId = window.setTimeout(scrollToHashTarget, 0);
    window.addEventListener("hashchange", scrollToHashTarget);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("hashchange", scrollToHashTarget);
    };
  }, []);

  return (
    <main className="page all-projects-tab" id="about">
      <p className="eyebrow">Project Archive</p>
      <h1 className="all-projects-title">All Projects</h1>
      <p className="all-projects-subtitle">
        This tab shows all projects in the same structure as the main portfolio.
      </p>
      <p className="all-projects-count">Total projects: {projects.length}</p>
      <a className="all-projects-home-link" href="./">
        Return to main portfolio
      </a>

      <CompanyCollaborations projects={projects} />

      <ProjectGrid projects={projects} />

      <section className="all-projects-contact" id="contact">
        <h2 className="project-section-title">Contact</h2>
        <p>
          You can contact me directly on LinkedIn.
        </p>
        <a
          href="https://www.linkedin.com/in/albert-beck-07750b16a/"
          target="_blank"
          rel="noreferrer"
        >
          Open LinkedIn profile
        </a>
      </section>
    </main>
  );
}
