import "../styles/hero.css";
import { sitePath } from "../utils/sitePath";

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-left">
          <p className="hero-intro">Hello, my name is</p>

          <h1 className="hero-title">
            Albert <span>Allermann Beck</span>
          </h1>

          <p className="hero-subtitle">
            This is my project portfolio, showcasing work from my bachelor's and master's studies.
          </p>
        </div>

        <div className="hero-right">
          <div className="hero-large-image">
            <img
              src={sitePath("/projects%20images/AlbertBeck_Black_BG.png")}
              alt="Albert Beck portrait on black background"
            />
          </div>
        </div>
      </div>
    </section>
  );
}