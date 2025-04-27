import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export interface ExperienceDetail {
  title: string;
  description: string;
  skills: string[];
  projects?: {
    name: string;
    description: string;
  }[];
}

export interface ExperienceData {
  webDevelopment: ExperienceDetail;
  projectManagement: ExperienceDetail;
  dataAnalysis: ExperienceDetail;
  androidApps: ExperienceDetail;
  apiDevelopment: ExperienceDetail;
}

interface ExperienceDetailBoxProps {
  isVisible: boolean;
  data: ExperienceDetail | null;
}

const ExperienceDetailBox: React.FC<ExperienceDetailBoxProps> = ({
  isVisible,
  data,
}) => {
  if (!data) return null;

  const boxVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="fixed z-30 inset-0 flex items-center justify-center pointer-events-none"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      exit="exit"
    >
      <motion.div
        className="bg-white w-full max-w-xl mx-auto rounded-lg overflow-hidden"
        variants={boxVariants}
      >
        <div className="p-6">
          <h3 className="text-xl font-medium mb-3 text-black">{data.title}</h3>
          <p className="text-sm text-gray-700 mb-5">{data.description}</p>

          {data.skills.length > 0 && (
            <div className="mb-5">
              <h4 className="text-sm font-medium mb-2 text-gray-800">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {data.projects && data.projects.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-2 text-gray-800">
                Projects
              </h4>
              <ul className="space-y-3">
                {data.projects.slice(0, 2).map((project, index) => (
                  <li key={index} className="text-xs">
                    <div className="flex items-start">
                      <ChevronRight
                        size={14}
                        className="mt-0.5 min-w-4 text-gray-500"
                      />
                      <div className="text-gray-700">
                        <span className="font-medium text-gray-900">
                          {project.name}
                        </span>{" "}
                        - {project.description}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceDetailBox;
