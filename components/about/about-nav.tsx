import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GooeyNav from "../gooey-nav";

const sections = {
  bio: {
    title: "Bio",
    content: (
      <div className="space-y-6 text-white/90">
        <p>
          I&apos;m a Computer Science student at the University of Macedonia,
          passionate about web development, data analytics, and creating
          intuitive digital experiences.
        </p>
        <p>
          My journey in tech started with learning the fundamentals of
          programming and quickly evolved into exploring modern frameworks and
          technologies that power today&apos;s web applications.
        </p>
        <p>
          I believe in continuous learning and challenging myself with new
          technologies and methodologies to stay at the forefront of the rapidly
          evolving tech landscape.
        </p>
      </div>
    ),
  },
  experience: {
    title: "Experience",
    content: (
      <div className="space-y-6 text-white/90">
        <p>Experience tab</p>
      </div>
    ),
  },
};

type SectionKey = keyof typeof sections;

export default function AboutNav() {
  const [activeSection, setActiveSection] = useState<SectionKey>("bio");

  const handleSectionChange = (index: number) => {
    const sectionKeys = Object.keys(sections) as SectionKey[];
    setActiveSection(sectionKeys[index]);
  };

  const items = Object.keys(sections).map((key) => ({
    label: sections[key as SectionKey].title,
    href: "#",
  }));

  const initialActiveIndex = Object.keys(sections).indexOf(activeSection);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col items-center">
        <div className="mb-12">
          <GooeyNav
            items={items}
            animationTime={500}
            particleCount={12}
            particleDistances={[90, 10]}
            particleR={150}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            initialActiveIndex={initialActiveIndex}
            onNavItemClick={handleSectionChange}
          />
        </div>

        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              {sections[activeSection].content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
