import "../styles/experiences.css";

export function RecommendationsSection() {
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

  return (
    <section className="experience-section" id="recommendations">
      <h2 className="project-section-title">Recommendations and Statements</h2>

      <div className="exp-grid">
        <div className="exp-column">
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
