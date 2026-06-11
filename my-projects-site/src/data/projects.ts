import type { Project } from "../types/Project structure";

export const projects: Project[] = [
  {
    title: "Play, Build, and Talk",
    description:
      "A digital co-play prototype developed in collaboration with The LEGO Group, exploring how generative AI can be integrated into playful family experiences.",
    longDescription:
      "A digital co-play prototype developed in collaboration with The LEGO Group. The project explores how generative AI can be integrated into a playful family experience by using an LLM to generate dynamic themes, story sequences, and open-ended LEGO building prompts. The prototype was built in Unity and designed as a hybrid play system, where the digital layer facilitates progression, timing, voting, and storytelling, while the physical LEGO bricks remain the core creative material. Through iterative development, prompt design, and play sessions with children and families, the project investigates how AI-supported game systems can increase replayability, support shared agency, and encourage conversation, creativity, and parent-child collaboration.",
    image: "/projects%20images/SpecialeImg/WelcomeBrickParty.png",
    semester: "Kandidat",
    tags: ["AI", "Unity", "LEGO", "Play", "Family Experience"],
    isThesis: true,
  },
  {
    title: "Mit andet projekt",
    description: "En prototype med fokus på minimalistisk UI og god brugeroplevelse.",
    image: "/projects/project-2.png",
    semester: "2. semester",
    tags: ["Design", "Frontend"],
  },
  {
    title: "Mit tredje projekt",
    description: "Et produktkoncept bygget som en interaktiv weboplevelse.",
    image: "/projects/project-3.png",
    semester: "3. semester",
    tags: ["Prototype", "UX"],
  },
  {
    title: "Mit fjerde projekt",
    description: "Et eksperiment med layout, interaktion og digital præsentation.",
    image: "/projects/project-4.png",
    semester: "4. semester",
    tags: ["UI", "Web"],
  },
];