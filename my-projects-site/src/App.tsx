import "./App.css";
import "./styles/global.css";
import { useEffect } from "react";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { HighlightedProjects } from "./components/HighlightedProjects";
import { AllProjectsTab } from "./components/AllProjectsTab";
import { Contact } from "./components/Contact";
import { ExperienceSection } from "./components/ExperienceSection";
import { CertificatesSection } from "./components/CertificatesSection";
import { RecommendationsSection } from "./components/RecommendationsSection";

import { projects } from "./data/projects";

export default function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const showAllProjectsTab = searchParams.get("view") === "all-projects";

  useEffect(() => {
    if (showAllProjectsTab) return;

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
  }, [showAllProjectsTab]);

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

        <ExperienceSection />

        <CertificatesSection />

        <RecommendationsSection />

        <Contact />
      </main>
    </>
  );
}