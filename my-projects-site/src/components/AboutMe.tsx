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
            I am a curious graduate with a strong interest in software development, emerging technologies, and interactive digital experiences.
          </p>
          <p>
            I enjoy fast-paced prototyping, turning early ideas into concrete concepts, and exploring different directions through testing and experimentation.
          </p>
          <p>
            My background in Game Development and Learning Technology combines technical development with user-centered design, play, and learning. I work in a structured way, value close collaboration, and like helping make complex ideas clear and tangible.
          </p>
          <p>
            I hope to contribute curiosity, creativity, and technical perspective to a team and help develop thoughtful solutions that create value.
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
