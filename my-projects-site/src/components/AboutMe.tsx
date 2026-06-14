import "../styles/about.css";

export function AboutMe() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-copy">
          <p className="about-kicker">About Me</p>
          <h2> MSc in Engineering </h2>
            <h1>Game Development and Learning Technology</h1>
          <p>
            I am Albert, a curious and eager-to-learn person with a strong interest in software development, digital solutions, and interactive experiences that combine play, learning, and technology. I enjoy exploring new technologies and developing both professionally and personally. 
            I work in a structured way, take responsibility for solving challenges independently, and value collaboration with others.
            I am positive, engaged, and focused on making complex ideas clear, engaging, and easy to explore. I would like to contribute to a social and collaborative team with a focus on quality, knowledge sharing, and strong solutions.
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
