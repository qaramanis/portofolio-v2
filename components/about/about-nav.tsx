import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GooeyNav from "../gooey-nav";
import { Separator } from "@/components/ui/separator";

const sections = {
  bio: {
    title: "Bio",
    content: (
      <div className="space-y-6 text-white/90">
        <p>
          I&apos;m an ambitious Computer Science soon-to-be graduate from
          University of Macedonia, in Thessaloniki, Greece
        </p>
        <Separator />
        <p>
          Passionate about web development, data analytics, project management,
          and creating intuitive digital experiences.
        </p>
        <Separator />
        <p>
          I am constantly trying to evolve my skills and knowledge to follow the
          tech trends and contribute to the community.
        </p>
      </div>
    ),
  },
  experience: {
    title: "Experience",
    content: (
      <div className="space-y-6 text-red-400">
        <p>Under construction</p>
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
        <div className="my-2 ">
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
