"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SpotlightCard from "../reactbits.tsx/spotlight-card";
import ProjectCard from "./project-card";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  tag: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "S/4HANA Planning",
    description:
      "Designed and performed a fully integrated order-to-cash cycle using SAP's S/4HANA ERP",
    technologies: ["SAP", "ERP"],
    image: "/icons/sap.svg",
    tag: "University Project",
    link: "/",
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
        Through my academic career, I&apos;ve cultivated proficiency with
        Atlassian&apos;s suite of project management solutions, enabling me to
        implement structured workflows that combine these technical tools with
        analytical thinking to deliver systematically organized and efficiently
        executed projects.
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
