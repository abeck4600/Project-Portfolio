import { useEffect, useRef, useState } from "react";

import type { Project } from "../types/Project structure";
import { ProjectCard } from "./ProjectCard";

type ScrollableProjectsRowProps = {
  projects: Project[];
  sectionLabel: string;
};

export function ScrollableProjectsRow({
  projects,
  sectionLabel,
}: ScrollableProjectsRowProps) {
  const trackRef = useRef<HTMLElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateButtons = () => {
      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      setCanScrollLeft(track.scrollLeft > 2);
      setCanScrollRight(track.scrollLeft < maxScrollLeft - 2);
      setHasOverflow(maxScrollLeft > 2);
    };

    updateButtons();
    track.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);

    return () => {
      track.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, [projects.length]);

  function handleScroll(direction: "left" | "right") {
    const track = trackRef.current;
    if (!track) return;

    const scrollAmount = Math.max(track.clientWidth * 0.8, 320);
    track.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }

  return (
    <div className="project-carousel-wrapper">
      <div className="project-carousel" aria-label={`${sectionLabel} carousel`}>
        <button
          className="carousel-nav carousel-nav--left"
          type="button"
          onClick={() => handleScroll("left")}
          disabled={!canScrollLeft}
          aria-label={`Scroll ${sectionLabel} to previous projects`}
        >
          &#8249;
        </button>

        <section className="project-grid project-grid--scrollable" ref={trackRef}>
          {projects.map((project) => (
            <ProjectCard
              project={project}
              featured={project.isFeatured}
              key={project.title}
            />
          ))}
        </section>

        <button
          className="carousel-nav carousel-nav--right"
          type="button"
          onClick={() => handleScroll("right")}
          disabled={!canScrollRight}
          aria-label={`Scroll ${sectionLabel} to next projects`}
        >
          &#8250;
        </button>
      </div>

      {hasOverflow && (
        <p className="carousel-swipe-hint" aria-hidden="true">
          Swipe for at se flere projekter -&gt;
        </p>
      )}
    </div>
  );
}