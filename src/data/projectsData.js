import corenoteHome from "../assets/corenote_home.png";
import corenoteFeatures from "../assets/corenote_features.png";
import corenoteLogin from "../assets/corenote_login.png";
import corenoteNotes from "../assets/corenote_note.png";
import rapidrawHome from "../assets/rapidraw_home.png";
import rapidrawCollab from "../assets/rapidraw_collab.png"

export const projectsData = [
  {
    id: 1,
    title: "CoreNote",
    description:
      "A full-stack e-commerce application built with React, Node.js, Express, and MongoDB. Features include user authentication, product catalog with search and filtering, shopping cart, Stripe payment integration, order tracking, and an admin dashboard for inventory management.",
    image: corenoteHome,
    images: [corenoteHome, corenoteFeatures, corenoteLogin, corenoteNotes],
    technologies: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
      { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC2626" },
      { name: "React Query", icon: "https://cdn.simpleicons.org/reactquery/FF4154" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    ],
    githubUrl: "https://github.com/sagar5412/corenote",
    liveUrl: "https://corenote.gksagar.online",
  },
  {
    id: 2,
    title: "RapiDraw",
    description:
      "A real-time messaging application powered by Socket.io and the MERN stack. Supports private messaging, group chats, file sharing, read receipts, typing indicators, and push notifications. Features a clean, responsive UI with dark mode support.",
    image: rapidrawHome,
    images: [rapidrawHome, rapidrawCollab],
    technologies: [
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Socket.io", icon: "https://cdn.simpleicons.org/socketdotio/ffffff" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "Express", icon: "https://cdn.simpleicons.org/express/ffffff" },
    ],
    githubUrl: "https://github.com/sagar5412/rapidraw",
    liveUrl: "https://rapidraw.gksagar.online",
  },
];
