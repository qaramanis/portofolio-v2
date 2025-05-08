"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Skill {
  name: string;
  description: string;
  icon: string;
}

const skills: Skill[] = [
  {
    name: "React",
    description: "JavaScript Library",
    icon: "https://cdn.brandfetch.io/idREYlLkpD/theme/dark/id-H4pLvmU.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    name: "Next.js",
    description: "React framework",
    icon: "https://cdn.brandfetch.io/id2alue-rx/theme/dark/idqNI71Hra.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    name: "TypeScript",
    description: "JavaScript but better",
    icon: "https://cdn.brandfetch.io/idKX_Hb7va/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    name: "Tailwind",
    description: "CSS framework",
    icon: "https://cdn.brandfetch.io/idMNEQh7-0/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    name: "Git",
    description: "Version control",
    icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg",
  },
  {
    name: "Figma",
    description: "Design Tool",
    icon: "https://cdn.brandfetch.io/idZHcZ_i7F/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    name: "Supabase",
    description: "Database manager",
    icon: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
  },
  {
    name: "Node.js",
    description: "Backend services",
    icon: "https://nodejs.org/static/logos/jsIconGreen.svg",
  },
];

export default function WebDevSkills() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
      className="my-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Current technologies
      </h2>
      <p className="text-white/70 mb-8 max-w-3xl">
        I have worked with a range of modern technologies that empower me to
        build highly functional solutions. These are some of my main
        technologies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex bg-gray-900/75 items-center gap-4 p-4 rounded-lg border border-white/30 hover:border-white/75 transition-all duration-300"
          >
            {skill.icon && (
              <Image
                src={skill.icon}
                alt={`${skill.name} icon`}
                width={32}
                height={32}
              />
            )}
            <div>
              <h3 className="font-medium cursor-default">{skill.name}</h3>
              <p className="text-sm text-white/50 cursor-default">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
