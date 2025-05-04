"use client";

import React from "react";
import { Activity } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    tag: string;
    link: string;
  };
  index: number;
  isInView: boolean;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();

  const handleImageClick = () => {
    router.push(project.link);
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm border h-auto border-white/10 rounded-xl overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={600}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
          onClick={handleImageClick}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="default"
              className="bg-transparent text-white hover:text-white hover:bg-transparent"
            >
              <Activity size={16} className="mr-1" />
              {project.tag}
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-medium mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-white/70 text-sm mb-4">{project.description}</p>
      </div>
    </div>
  );
}
