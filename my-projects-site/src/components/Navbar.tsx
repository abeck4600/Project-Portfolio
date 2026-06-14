import "../styles/navbar.css";
import { useEffect, useRef, useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const mainPortfolioHref = "./";

  useEffect(() => {
    function handleDocClick(e: MouseEvent) {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("click", handleDocClick);
    return () => document.removeEventListener("click", handleDocClick);
  }, []);

  function toggleDropdown(e: React.MouseEvent) {
    e.preventDefault();
    setOpen((v) => !v);
  }

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a href={mainPortfolioHref} className="logo">
          AB
        </a>

        <nav className="nav">
          <a href="./#about">About me</a>

          <div
            className={`nav-dropdown${open ? " open" : ""}`}
            ref={dropdownRef}
          >
            <div className="dropdown-trigger-row">
              <a href="./#highlighted-projects">Projects</a>
              <button
                className="dropdown-trigger"
                onClick={toggleDropdown}
                type="button"
                aria-label="Toggle projects menu"
              >
                <span>▾</span>
              </button>
            </div>

            <div className="dropdown-menu three-column">
              <div className="dropdown-column">
                <h4>Master</h4>
                <a href="./?view=all-projects#master-project">Master Project</a>
                <a href="./?view=all-projects#semester-9">Semester 3</a>
                <a href="./?view=all-projects#semester-8">Semester 2</a>
                <a href="./?view=all-projects#semester-7">Semester 1</a>
              </div>

              <div className="dropdown-column">
                <h4>Bachelor</h4>
                <a href="./?view=all-projects#semester-6">Bachelor Project</a>
                <a href="./?view=all-projects#semester-5">Semester 5</a>
                <a href="./?view=all-projects#semester-4">Semester 4</a>
                <a href="./?view=all-projects#semester-3">Semester 3</a>
                <a href="./?view=all-projects#semester-2">Semester 2</a>
                <a href="./?view=all-projects#semester-1">Semester 1</a>
              </div>

              <div className="dropdown-column">
                <h4>Company collaborations</h4>
                <a href="./?view=all-projects#company-collaborations">
                  View collaborations
                </a>
              </div>
            </div>
          </div>

          <a href="./#contact">Contact</a>

          <a
            href="https://www.linkedin.com/in/albert-beck-07750b16a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}