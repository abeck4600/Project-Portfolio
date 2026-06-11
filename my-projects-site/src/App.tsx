import "./App.css";
import "./styles/global.css";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { HighlightedProjects } from "./components/HighlightedProjects";
import { AllProjectsTab } from "./components/AllProjectsTab";
import { Contact } from "./components/Contact";

import { projects } from "./data/projects";

export default function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const showAllProjectsTab = searchParams.get("view") === "all-projects";

  if (showAllProjectsTab) {
    return (
      <>
        <Navbar />
        <AllProjectsTab projects={projects} />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />

      <main className="page">
        <HighlightedProjects projects={projects} />

        <section className="projects-archive-cta">
          <h2 className="project-section-title">All Projects</h2>
          <p>
            The remaining projects are available in a separate tab so the front
            page stays focused.
          </p>
          <a href="/?view=all-projects">
            Open all projects
          </a>
        </section>

        <Contact />
      </main>
    </>
  );
}