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
            I am Albert, a curious and eager-to-learn person with a strong interest in software development and digital solutions. I enjoy creating intuitive, user-friendly experiences and exploring new technologies and complex problems. I work in a structured way, take responsibility, and independently investigate how to approach and solve tasks. At the same time, I value professional sparring and collaboration with others.
            <br />
            As a person, I am positive, creative, patient, and persistent. I care about creating clarity, understanding needs, and contributing to well-considered solutions. I see myself as a team player who enjoys being part of a collaborative and social team focused on quality and knowledge sharing.
          </p>
        </div>

        <div className="about-notes">
          <div>
            <span>Focus</span>
            <p>Building user-centered digital solutions with a focus on software development, interaction design, and learning technology.</p>
          </div>
          <div>
            <span>Tools</span>
            <p>Unity, C#, Python, TypeScript, JavaScript, PHP, Angular, RStudio, React, Git, GitHub, VR/AR, Miro and Twine.</p>
          </div>
          <div>
            <span>Goal</span>
            <p>Create solutions that can create value, support collaboration, and make ideas easier to explore and understand.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
