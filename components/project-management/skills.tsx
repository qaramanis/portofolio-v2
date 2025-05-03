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
    name: "Jira",
    description: "Project Tracking",
    icon: "/icons/jira.svg",
  },
  {
    name: "SAP",
    description: "Resource Planning",
    icon: "/icons/sap.svg",
  },
  {
    name: "KanBan",
    description: "Agile Dev Framework",
    icon: "/icons/kanban.svg",
  },
];

export default function ProjectManagementSkills() {
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
        I leverage agile project management methodologies through Jira and
        Kanban frameworks to streamline workflows, prioritize tasks effectively,
        and ensure transparent progress tracking across cross-functional teams.
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
