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
    title: "MOOC 2023 Course",
    description:
      "Completed the whole MOOC 2023 Python course. A course developed by the University of Helsinki, covering material from introductory to advanced levels.",
    technologies: ["Python"],
    image:
      "https://programming-23.mooc.fi/static/banner-84ef18e01729a6202c2c9b3c8ef46a38.svg",
    tag: "Course",
    link: "",
  },
  {
    title: "Machine Learning - Classification",
    description:
      "Air Quality Prediction from environmental and demographic factors using Machine Learning Classification",
    technologies: ["Python"],
    image:
      "https://images.unsplash.com/photo-1649881927251-46644283751a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "University Project",
    link: "https://drive.google.com/file/d/1DPnBAkxj0OcCaltYJ7YUYXHLdo-TxxDN/view?usp=sharing",
  },
];

export default function DataAnalysisProjects() {
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
      <p className="text-white/70 mb-8 max-w-3xl">TODO: Add description</p>

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
