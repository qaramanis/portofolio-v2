"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./project-card";
import SpotlightCard from "../reactbits.tsx/spotlight-card";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  tag: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "GDD Editor",
    description:
      "Web platform to help teams and idividual game developers compose and manage their Game Deisgn Documents (GDDs)",
    technologies: ["React", "Node.js", "OpenAI API", "MongoDB"],
    image: "/projects/gdd-v2.png",
    github: "https://github.com/qaramanis/journeyjolt",
    tag: "under development",
    link: "https://gdd-v2.vercel.app/home",
  },
  {
    title: "Personal Portfolio",
    description:
      "This very portfolio website showcasing my work experience, projects and skills with modern animations and interactive elements.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/projects/portofolio.png",
    github: "https://github.com/qaramanis/portofolio-v2",
    tag: "Hobby",
    link: "https://qaramanis.com",
  },
  {
    title: "Repowersolutions.gr",
    description:
      "Interactive webpage for an engineering company showcasing their electrical and mechanical engineering services.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/projects/repowersolutions.png",
    github: "https://github.com/qaramanis/repower-solutions",
    tag: "Work",
    link: "https://www.repowersolutions.gr/",
  },
];

export default function WebDevProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.05 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
      className="my-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Featured Projects</h2>
      <p className="text-white/70 mb-8 max-w-3xl">
        Here is a highlight of some projects I&apos;ve worked on. Each one
        presented unique challenges and opportunities to learn and grow as a
        developer.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <SpotlightCard
            key={index}
            className="h-full backdrop-blur-sm"
            spotlightColor="rgba(59, 130, 246, 0.3)"
          >
            <ProjectCard project={project} index={index} isInView={isInView} />
          </SpotlightCard>
        ))}
      </div>
    </motion.div>
  );
}
