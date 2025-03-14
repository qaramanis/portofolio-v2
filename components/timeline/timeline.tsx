"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";

const timelineEvents = [
  {
    year: 2022,
    title: "University of Macedonia",
    description:
      "Started my studies in Computer Science with a focus on applied informatics.",
    details:
      "Began learning fundamentals of programming, algorithms, and operation systems. Participated in various coding challenges and completed projects to build practical experience.",
  },
  {
    year: 2023,
    title: "First Contact with Project Management",
    description:
      "Learned about cooperation and project management in a team environment.",
    details:
      "Developed and presented a mock project about business analytics. The project emphasized the importance of teamwork and communication and showcased technologies like SAP, Tableau, Jira and Gephi for visualization.",
  },
  {
    year: 2024,
    title: "Getting to know Android Studio",
    description:
      "Expanded my knowledge by accepting the challenge of Android development.",
    details:
      "Created my first Android application, themed around recycling and a reward system to award the user for recycling. Developed on anroid studio using Java and XML.",
  },
  {
    year: 2024,
    title: "Web Development Arc",
    description: "Got really interested and got hooked by web development.",
    details:
      "Created my first eshop and separate marketplace and made a custom API to handle communication between the two. Used technologies like React, Node.js, REST APIs, PostgreSQL, and Supabase.",
  },
  {
    year: 2024,
    title: "First Professional Experience",
    description: "Got a chance to prove my skills as a professional",
    details:
      "A simple but meaningful app for a friendn to pitch his startup idea. Main focus was the design and the user experience.",
  },
];

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef}>
      <div className="max-w-5xl min-h-screen mx-auto">
        <div className="relative">
          {/* Animated progress line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-[0.5px] w-[1px] bg-white origin-top"
            style={{
              top: "72px",
              height: "calc(100% - 144px)",
              scaleY,
              transformOrigin: "top",
            }}
          />

          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={index}
              event={event}
              index={index}
              isExpanded={expandedEvent === index}
              onToggle={() =>
                setExpandedEvent(expandedEvent === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
}: {
  event: (typeof timelineEvents)[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full ${
        index % 2 === 0 ? "flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="w-5/12" />
      <div className="z-20">
        <div className="flex items-center justify-center w-6 h-6 bg-primary rounded-full">
          <div className="w-2 h-2 bg-background rounded-full" />
        </div>
      </div>
      <motion.div
        className="w-5/12 cursor-pointer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={onToggle}
      >
        <div className="p-5 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-primary/10 hover:border-primary/30 transition-all duration-300">
          <span className="inline-block px-2 py-1 mb-2 text-xs font-semibold rounded bg-primary/10 text-primary">
            {event.year}
          </span>
          <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
          <p className="text-muted-foreground">{event.description}</p>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-3 pt-3 text-sm text-muted-foreground border-t border-gray-200 dark:border-gray-700">
              {event.details}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
