// src/data/siteData.js
// Central data file — update these values to personalise the portfolio.

export const owner = {
  name: "Francesz Tolentino",
  title: "Frontend Developer",
  tagline: "I craft performant, accessible web experiences that users love.",
  bio: "I'm an aspiring frontend developer with experience of building responsive, user-focused web applications. I enjoy turning complex problems into clean, intuitive interfaces. When I'm not writing code, you can find me contributing to open-source projects or experimenting with generative design.",
  photoUrl: null,         // set to a path like "/images/profile.jpg" when an asset is available
  resumeUrl: null,        // set to "/resume.pdf" when a resume file is available
  email: "alex.rivera@example.com",
  socials: [
    { label: "GitHub",   url: "https://github.com/alexrivera" },
    { label: "LinkedIn", url: "https://linkedin.com/in/alexrivera" },
  ],
  skills: ["React", "JavaScript", "TypeScript", "CSS", "Node.js", "Vite", "Accessibility"],
};

export const projects = [
  {
    id: "project-taskflow",
    title: "TaskFlow",
    description:
      "A drag-and-drop task management app with real-time collaboration, keyboard-friendly interactions, and offline support via service workers.",
    technologies: ["React", "TypeScript", "CSS Modules", "IndexedDB"],
    demoUrl: "https://taskflow-demo.example.com",
    repoUrl: "https://github.com/alexrivera/taskflow",
    imageUrl: null,       // set to "/images/taskflow.png" when a screenshot is available
    imageAlt: null,       // set to "Screenshot of TaskFlow app showing the kanban board" when imageUrl is set
  },
  {
    id: "project-weathernow",
    title: "WeatherNow",
    description:
      "A minimal weather dashboard that fetches live forecasts using the Open-Meteo API and renders animated condition icons. Fully responsive from 320 px up.",
    technologies: ["React", "Vite", "CSS", "Open-Meteo API"],
    demoUrl: "https://weathernow.example.com",
    repoUrl: "https://github.com/alexrivera/weathernow",
    imageUrl: null,
    imageAlt: null,
  },
  {
    id: "project-devblog",
    title: "DevBlog",
    description:
      "A statically-generated developer blog with MDX support, syntax-highlighted code blocks, and an RSS feed. Achieves a Lighthouse score of 98.",
    technologies: ["Astro", "MDX", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://alexrivera.dev",
    repoUrl: "https://github.com/alexrivera/devblog",
    imageUrl: null,
    imageAlt: null,
  },
];
