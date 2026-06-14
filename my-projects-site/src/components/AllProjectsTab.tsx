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
      <h1 className="all-projects-title">All My Projects</h1>

      <CompanyCollaborations projects={projects} />

      <ProjectGrid projects={projects} />

      <section className="all-projects-contact" id="contact">
        <p className="all-projects-contact-eyebrow">Contact</p>
        <h2>Should we have a talk?</h2>
        <p>
          You can contact me via LinkedIn or send me a message by email.
        </p>
      </section>
    </main>
  );
}
