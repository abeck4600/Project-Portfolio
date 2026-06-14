import "../styles/experiences.css";

export function ExperienceSection() {
  const experiences = [
    {
      role: "Mentor E23 & E24",
      company: "Syddansk Universitet, Odense",
      period: "Apr 2023 - Maj 2025",
      statementUrl: "",
      bullets: [
        "Mentor for the new cohort of engineering students on the Game Development and Learning Technology programme.",
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
      program: "HTX Koge",
      bullets: [],
      period: "Aug 2015 - Jun 2018",
    },
  ];

  const certificates = [
    {
      title: "Mentor Certificate",
      text: "Completed mentor education",
      imageUrls: ["https://www.dropbox.com/scl/fi/jxiq2v8nsydqanvn9a037/Mentorbevis-Albert-Beck-2023.pdf?rlkey=twmduzurrkli4lcqygvuge7ug&st=msyi3l45&dl=0"],
    },
    {
      title: "Swedish Course Certificate",
      text: "Completed course certificate from Sweden",
      imageUrls: ["https://www.dropbox.com/scl/fi/xx3kvqzn94j4cjkq1hbee/Kursbevis-Albert-Allermann-Beck.pdf?rlkey=dl0c3wy8cxl1m8f30nk9r8v1z&st=5tikq03p&dl=0",],
    },
    {
      title: "Project Management Certificate (IDA)",
      text: "Completed project management course at IDA",
      imageUrls: ["https://www.dropbox.com/scl/fi/qtndh0y097qtvvxzz5m0y/Bevis-Projektledelse-IDA-uden-CPR.pdf?rlkey=egmm0908nv2let4lrfyjjbi9l&st=mepizph8&dl=0"],
    },
    {
      title: "DIF trainer 1, Strength Training",
      text: "Aalborg Sportshigh School, Aalborg - Mar 2021 - Jun 2021",
      imageUrls: ["https://www.dropbox.com/scl/fi/5qs3bzz3eh4138gf2cwbr/DIF-styrketr-ning.pdf?rlkey=hmfyqgebj7cfesm269q6ceipe&st=93bt6n30&dl=0"],
    },
    {
      title: "DIF Coaching 1",
      text: "Aalborg Sportshøjskole, Aalborg - Aug 2020 - Dec 2020",
      imageUrls: ["https://www.dropbox.com/scl/fi/79i4wvizjklcefrn56c29/DIF-1-Coach.pdf?rlkey=4hx5nryug3gd1cmkqkn2llzb3&st=8u9xwo5g&dl=0"],
    },
    {
      title: "DGI Esport Coach",
      text: "Aalborg Sportshøjskole, Aalborg - Aug 2020 - Dec 2020",
      imageUrls: ["https://www.dropbox.com/scl/fi/kohy58t26pqik40bme7op/DGI-Esport-tr-ner.pdf?rlkey=2t6i2fw6lw9mntrpqa4ujz9kx&st=hbjog3ma&dl=0"],
    },
  ];

  const recommendations = [
    {
      title: "Mentor Job - Recommendation from Dorte Frølund Kromann",
      text: "Recommendation letter",
      imageUrls: ["https://www.dropbox.com/scl/fi/0xflhjipz28khvgl0s08k/Anbefaling-Albert-Allermann-Beck-2025.pdf?rlkey=1yh88gvamc2dx2th1e13c5fd8&st=km57xwxz&dl=0"],
    },
    {
      title: "Statement from Esben Gaarsmand, CTO - Vitec MV",
      text: "About the Collaboration",
      imageUrls: ["https://www.dropbox.com/scl/fi/mi5eilpe3tbuusr6nj6qt/Innopixel-Udtalelse-vedr-rende-studenterprojekt.pdf?rlkey=1u5vmr9bxniv1qmw2f8kyyt7w&st=k2s72p8f&dl=0"],
      projectUrl: "./?view=all-projects#10-finger-gamification",
      projectButtonLabel: "Go to project",
    },
    {
      title: "Statement from Micheal Lundorff-Hansen - Innopixel",
      text: "About the Collaboration",
      imageUrls: ["https://www.dropbox.com/scl/fi/mi5eilpe3tbuusr6nj6qt/Innopixel-Udtalelse-vedr-rende-studenterprojekt.pdf?rlkey=1u5vmr9bxniv1qmw2f8kyyt7w&st=k2s72p8f&dl=0"],
      projectUrl: "./?view=all-projects#tour-de-statue",
      projectButtonLabel: "Go to project",
    },
  ];

  // publications removed per user request

  return (
    <section className="experience-section" id="experience-education">
      <h2 className="project-section-title">Experience & Education</h2>

      <div className="exp-grid">
        <div className="exp-column exp-experience">
          <h3>Experience</h3>
          {experiences.map((item) => (
            <div className="exp-card" key={`${item.role}-${item.company}`}>
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

          <h3 className="edu-heading">Education</h3>
          {education.map((item) => (
            <div className="exp-card exp-card--education" key={`${item.degree}-${item.period}`}>
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
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <h3 className="statement-heading">Certificates</h3>
          <div className="certificates-grid">
            {certificates.map((card) => (
              <div className="certificate-card" key={card.title}>
                <strong className="cert-title">{card.title}</strong>
                <p className="cert-description">{card.text}</p>
                <div className="cert-actions">
                  {card.imageUrls.map((imageUrl, index) => (
                    <a
                      className="cert-button"
                      href={imageUrl}
                      target="_blank"
                      rel="noreferrer"
                      key={imageUrl}
                    >
                      Show {card.imageUrls.length > 1 ? index + 1 : ""}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h3 className="statement-heading">Recommendations and Statements</h3>
          <div className="certificates-grid">
            {recommendations.map((card) => (
              <div className="certificate-card" key={card.title}>
                <strong className="cert-title">{card.title}</strong>
                <p className="cert-description">{card.text}</p>
                <div className="cert-actions">
                  {card.imageUrls.map((imageUrl, index) => (
                    <a
                      className="cert-button"
                      href={imageUrl}
                      target="_blank"
                      rel="noreferrer"
                      key={imageUrl}
                    >
                      Show {card.imageUrls.length > 1 ? index + 1 : ""}
                    </a>
                  ))}
                  {card.projectUrl ? (
                    <a className="cert-button" href={card.projectUrl}>
                      {card.projectButtonLabel ?? "Go to project"}
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
