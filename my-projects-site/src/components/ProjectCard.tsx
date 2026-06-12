import { useState } from "react";
import type { Project } from "../types/Project structure";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      className={`project-card${featured ? " featured" : ""}`}
      id={project.semester.toLowerCase().replace(". ", "-")}
    >
      <div className="image-wrap">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-info">
        <div className="project-meta">
          {project.course && <span>{project.course}</span>}
        </div>

        {project.tags && (
          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}

        <h2>{project.title}</h2>

        <p>{project.description}</p>

        {(project.longDescription || project.videoUrl || project.articleUrl) && (
          <div className="project-actions">
            {project.longDescription && (
              <>
                {isExpanded && (
                  <div className="expanded-content">
                    <p>{project.longDescription}</p>
                  </div>
                )}
                <button
                  className="read-more"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? "Show less" : "Read more"}
                </button>
              </>
            )}

            {project.videoUrl && (
              <a
                className="video-button"
                href={project.videoUrl}
                target="_blank"
                rel="noreferrer"
              >
                Video
              </a>
            )}

            {project.articleUrl && (
              <a
                className="video-button"
                href={project.articleUrl}
                target="_blank"
                rel="noreferrer"
              >
                Publication
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}