import "../styles/about.css";

export function AboutMe() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-copy">
          <p className="about-kicker">About Me</p>
          <h2> MSc in Engineering (Game Development and Learning Technology)</h2>
          <p>
            I am Albert Beck, an MSc student in Engineering with a focus on Game
            Development and Learning Technology. I build interactive experiences
            that combine play, learning, and technology, with an emphasis on
            making complex ideas feel clear, engaging, and easy to explore.
          </p>
        </div>

        <div className="about-notes">
          <div>
            <span>Focus</span>
            <p>Designing playful learning experiences that feel meaningful and usable.</p>
          </div>
          <div>
            <span>Tools</span>
            <p>Unity, C#, VR/AR, prototyping, and cross-disciplinary development.</p>
          </div>
          <div>
            <span>Goal</span>
            <p>Create technology that helps people learn, collaborate, and explore.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
