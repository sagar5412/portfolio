export const profile = {
  name: "G K Sagar",
  shortName: "Sagar",
  role: "Full Stack Developer",
  location: "Bengaluru, India",
  email: "sagar.gk.bly@gmail.com",
  github: "https://github.com/sagar5412",
  linkedin: "https://www.linkedin.com/in/gksagar/",
  resume: "/resume.docx",
  headline: "Reliable software. Real-world impact.",
  intro:
    "I’m Sagar, a full stack developer turning complex workflows into thoughtful, dependable software. From healthcare operations to collaborative tools, I build with the people using them in mind.",
  description:
    "G K Sagar is a full stack developer in Bengaluru building production web applications, healthcare analytics, and real-time collaboration tools.",
  proof: [
    {
      value: "03",
      label: "Production applications",
      detail: "Built & deployed at GarbhaGudi",
    },
    {
      value: "10",
      label: "Hospital branches",
      detail: "Connected through patient analytics",
    },
    {
      value: "500+",
      label: "Students reached",
      detail: "Through live event quizzes",
    },
  ],
  about: [
    "I’m a developer who likes understanding the whole problem. Who uses this? Where does the data come from? What happens when something fails? Those questions shape how I build.",
    "At GarbhaGudi IVF Centre, I develop and deploy software for everyday operations: tracing patient journeys, checking invoices, and running live events. My work spans the interface, the database, and the infrastructure that keeps everything running.",
    "Outside work, I explore the details of collaborative software through RapiDraw and CoreNote. I’m interested in full stack roles where I can own meaningful problems and keep growing as an engineer.",
  ],
  principles: [
    {
      title: "Understand the workflow.",
      text: "Start with the people and the problem, then choose the tools.",
    },
    {
      title: "Build for the edges.",
      text: "Treat failure paths, data integrity, and access control as part of the product.",
    },
    {
      title: "Own the delivery.",
      text: "Carry the work from the first interface to deployment, testing, and maintenance.",
    },
  ],
};
// Set VITE_SITE_URL to the actual public origin before production deployment.
export const siteUrl = new URL(
  import.meta.env?.VITE_SITE_URL || "https://gksagar.online",
).origin;
