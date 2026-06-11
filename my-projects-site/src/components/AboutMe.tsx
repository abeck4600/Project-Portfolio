import "../styles/about.css";

export function AboutMe() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-copy">
          <p className="about-kicker">About Me</p>
          <h2> MSc in Engineering (Game Development and Learning Technology Engineering)</h2>
          <p>
            I am Albert Beck, a student in Game Development and Learning
            Technology. I am passionate about creating educational experiences
            through play, learning, VR, AR, hardware, and software.
          </p>
        </div>

        <div className="about-notes">
          <div>
            <span>Focus</span>
            <p>Educational game design and interactive experiences.</p>
          </div>
          <div>
            <span>Tools</span>
            <p>Unity, creative prototyping, and emerging technologies.</p>
          </div>
          <div>
            <span>Goal</span>
            <p>Build experiences that are both engaging and meaningful.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
