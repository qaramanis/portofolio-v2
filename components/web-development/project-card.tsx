"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    github: string;
    live: string;
  };
  index: number;
  isInView: boolean;
}

export default function ProjectCard({
  project,
  index,
  isInView,
}: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:border-blue-500/30 transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <div className="flex gap-2">
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                variant="ghost"
                className="bg-black/50 text-white hover:bg-black/70"
              >
                <Github size={16} className="mr-1" />
                Code
              </Button>
            </Link>
            <Link href={project.live} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                variant="ghost"
                className="bg-black/50 text-white hover:bg-black/70"
              >
                <ExternalLink size={16} className="mr-1" />
                Live
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-medium mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-white/70 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="text-xs px-2 py-1 bg-white/10 rounded-md text-white/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
