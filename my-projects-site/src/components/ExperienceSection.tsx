import "../styles/experiences.css";

export function ExperienceSection() {
  const experiences = [
    {
      role: "Consultant",
      company: "The LEGO Group - DCE Strategic Design and Research, Billund",
      period: "2025 - 2026",
      bullets: [
        "Planned and ran eight play sessions with children and families to test and refine early-stage play concepts and prototypes.",
        "Built interactive prototypes to explore and test play concepts with children and parents.",
        "Worked closely with design strategists and behavioural researchers, turning observations into concrete design recommendations.",
        "Presented prototypes and findings to designers, researchers, and senior design leadership.",
      ],
    },
    {
      role: "Mentor E23 & E24",
      company: "University of Southern Denmark, Odense",
      period: "Apr 2023 - May 2025",
      statementUrl: "",
      bullets: [
        "Planned and ran introductory activities and recurring class sessions for new engineering students in Game Development and Learning Technology, in collaboration with program coordinators.",
        "Focused on wellbeing, academic introduction, and social integration, and completed mentor training in team psychology, conflict resolution, communication, and group leadership.",
      ],
    },
    {
      role: "Robot Summer Camp 2023 & 2024 (Seasonal work)",
      company: "Teknologiskolen, Odense",
      period: "Jul 2023 - Jul 2024",
      bullets: [
        "Helped children and young people aged 6-16 with technology, robotics, and creative problem-solving.",
        "Explained technical topics so everyone could take part.",
      ],
    },
    {
      role: "Esports Coach",
      company: "Køge Nord Esport",
      period: "Dec 2018 - Jul 2020",
      bullets: ["Planned and ran training sessions for children and young people twice a week."],
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
        "Developed and evaluated a tablet-based co-play prototype with The LEGO Group, combining building with physical LEGO bricks, shared storytelling, and generative AI, and refined it through three play sessions with children and parents.",
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
        "A year that helped me grow personally and socially and gave me a strong network.",
      ],
      period: "Aug 2020 - Jun 2021",
    },
    {
      degree: "Mathematics A - Single Subject Course",
      program: "Niels Brock - Copenhagen Business College, Nørre Voldgade 34, Copenhagen",
      bullets: [],
      period: "Mar 2020 - Jun 2020",
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
