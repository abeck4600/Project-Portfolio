import "../styles/experiences.css";

export function CertificatesSection() {
  const certificates = [
    {
      title: "Mentor Certificate",
      text: "Completed mentor education",
      imageUrls: ["https://www.dropbox.com/scl/fi/jxiq2v8nsydqanvn9a037/Mentorbevis-Albert-Beck-2023.pdf?rlkey=twmduzurrkli4lcqygvuge7ug&st=msyi3l45&dl=0"],
    },
    {
      title: "LEGO Foundation:Introduction to the Learning Through Play Experience Tool",
      text: "Certificate of achievement",
      imageUrls: ["https://www.dropbox.com/scl/fi/74ladxxfh6shedho9qhah/introduction-to-the-learning-through-play-experience-tool_certificate_of_achievement_il6wtcv.pdf?rlkey=crfbsw7ytpr9ru1fddh881nst&st=7796d86d&dl=0"],
    },
    {
      title: "Project Management Certificate (IDA)",
      text: "Completed project management course at IDA",
      imageUrls: ["https://www.dropbox.com/scl/fi/uw7he0jys6t1xr2aa8mq9/Bevis-Projektledelse-IDA.pdf?rlkey=cqxl9nh5v5o805l2iheht5dqw&st=x781mx11&dl=0"],
    },
    {
      title: "Swedish Course Certificate",
      text: "Completed course certificate from Sweden",
      imageUrls: ["https://www.dropbox.com/scl/fi/xx3kvqzn94j4cjkq1hbee/Kursbevis-Albert-Allermann-Beck.pdf?rlkey=dl0c3wy8cxl1m8f30nk9r8v1z&st=5tikq03p&dl=0",],
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

  return (
    <section className="experience-section" id="certificates">
      <h2 className="project-section-title">Certificates</h2>

      <div className="exp-grid">
        <div className="exp-column">
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
        </div>
      </div>
    </section>
  );
}
