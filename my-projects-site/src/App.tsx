import "./App.css";
import "./styles/global.css";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { Toolbar } from "./components/Toolbar";
import { ProjectGrid } from "./components/ProjectGrid";
import { Contact } from "./components/Contact";

import { projects } from "./data/projects";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />

      {/* Placeholder anchors for Master/Bachelor menu links */}
      <div id="master-1" />
      <div id="master-2" />
      <div id="master-3" />
      <div id="master-4" />

      <div id="bachelor-1" />
      <div id="bachelor-2" />
      <div id="bachelor-3" />
      <div id="bachelor-4" />
      <div id="bachelor-5" />
      <div id="bachelor-6" />

      <main className="page">
        <Toolbar projectCount={projects.length} />
        <ProjectGrid projects={projects} />
        <Contact />
      </main>
    </>
  );
}