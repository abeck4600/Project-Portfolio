import "../styles/experiences.css";

export function ExperienceSection() {
  const experiences = [
    {
      role: "Mentor E23 & E24",
      company: "University of Southern Denmark, Odense",
      period: "Apr 2023 - Maj 2025",
      statementUrl: "",
      bullets: [
        "Mentor for the new engineering students on the Game Development and Learning Technology programme.",
        "Planned and led the introduction week and the class sessions with a focus on wellbeing, academic introduction, and social integration.",
      ],
    },
    {
      role: "Robot Summer Camp 2023 & 2024 (Seasonal work)",
      company: "Teknologiskolen",
      period: "Jul 2023 - Jul 2024",
      bullets: [
        "Helped children and young people aged 6-16 with technology, robotics, and creative problem-solving.",
        "Communicated technical topics in an age-appropriate and engaging way.",
      ],
    },
    {
      role: "Esports Coach",
      company: "Køge Nord Esport",
      period: "Dec 2018 - Jul 2020",
      bullets: ["Taught children and young people esports."],
    },
    {
      role: "Distributor",
      company: "FK Distribution A/S",
      period: "Aug 2014 - Jul 2018",
      bullets: ["Delivered advertisements according to fixed routes and deadlines."],
    },
  ];

  const education = [
    {
      degree: "MSc in Engineering - Game Development and Learning Technology",
      program:
        "University of Southern Denmark, Mærsk Mc-Kinney Møller Institute",
      bullets: [
        "Thesis: Play, Build, and Talk: Supporting Playful Parent-Child Interaction Through Digital Co-Play.",
        "Developed a digital co-play prototype in collaboration with The LEGO Group with a focus on parent-child interactions, LEGO-based play, user-centered design, and generative AI.",
      ],
      period: "Sep 2024 - Jun 2026",
    },
    {
      degree: "Bachelor in Game Development and Learning Technology",
      program: "University of Southern Denmark, Mærsk Mc-Kinney Møller Institute",
      bullets: [
        "Bachelor project: 10-Finger Gamification.",
        "Implemented gamification elements in Vitec MV's existing web application in collaboration with Vitec MV.",
      ],
      period: "Sep 2021 - Jun 2024",
    },
    {
      degree: "Aalborg Sportshøjskole",
      program: "Aalborg Sportshøjskole, Aalborg",
      bullets: [
        "I developed a lot both socially and personally.",
      ],
      period: "Aug 2020 - Jun 2021",
    },
    {
      degree: "Mathematics A - Single Subject Course",
      program: "Niels Brock - Copenhagen Business College, Nørre Voldgade 34, Copenhagen",
      bullets: [],
      period: "Mar 2020 - Juni 2020",
    },
    {
      degree: "HTX - Communication/IT and Design",
      program: "HTX Køge",
      bullets: [],
      period: "Aug 2015 - Jun 2018",
    },
  ];

  // publications removed per user request

  return (
    <section className="experience-section" id="experience-education">
      <h2 className="project-section-title">Experience & Education</h2>

      <div className="exp-grid">
        <div className="exp-column exp-experience">
          <div className="exp-card-shell">
            <h3 className="project-section-title">Experience</h3>
            {experiences.map((item) => (
              <div className="exp-card exp-card--flat" key={`${item.role}-${item.company}`}>
                <div className="exp-card-head">
                  <strong className="exp-role">{item.role} - <span className="exp-company-inline">{item.company}</span></strong>
                  <div className="exp-meta">
                    <span className="exp-period">{item.period}</span>
                  </div>
                </div>
                <div className="exp-card-body">
                  <ul className="exp-bullets">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  {"statementUrl" in item && item.statementUrl ? (
                    <a className="exp-statement-button" href={item.statementUrl} target="_blank" rel="noreferrer">
                      Mentor statement
                    </a>
                  ) : null}
                </div>
              </div>
            ))}

            <h3 className="project-section-title">Education</h3>
            {education.map((item) => (
              <div className="exp-card exp-card--flat exp-card--education" key={`${item.degree}-${item.period}`}>
                <div className="exp-card-head exp-card-head--education">
                  <div className="exp-card-title">
                    <strong className="exp-role">{item.degree}</strong>
                    <span className="exp-company-inline exp-education-program">{item.program}</span>
                  </div>
                  <div className="exp-education-meta">
                    <span className="exp-period">{item.period}</span>
                  </div>
                </div>
                <div className="exp-card-body">
                  <ul className="exp-bullets">
                    {item.bullets.map((b) => {
                      if (b.includes("Play, Build, and Talk")) {
                        return (
                          <li key={b}>
                            Thesis: <em>Play, Build, and Talk: Supporting Playful Parent-Child Interaction Through Digital Co-Play.</em>
                          </li>
                        );
                      }
                      if (b.includes("10-Finger Gamification")) {
                        return (
                          <li key={b}>
                            Bachelor project: <em>10-Finger Gamification.</em>
                          </li>
                        );
                      }
                      return <li key={b}>{b}</li>;
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
