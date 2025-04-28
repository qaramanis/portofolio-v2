"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import Hero from "./hero/hero";
import { AnimatePresence, motion, Variants } from "framer-motion";
import ServicesMenu from "./experience/experience";

const sectionVariants: Variants = {
  hidden: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? 40 : -40,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
    },
  }),
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? -40 : 40,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
    },
  }),
};

export default function Home() {
  const sections = useMemo(
    () => [
      { id: "hero-section", component: <Hero /> },
      // { id: "about-section", component: <About /> },
      { id: "experience-section", component: <ServicesMenu /> },
      // { id: "contact-section", component: <Contact /> },
    ],
    []
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>(
    Array(sections.length).fill(null)
  );
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const currentSection = sectionRefs.current[currentSectionIndex];
      const currentSectionConfig = sections[currentSectionIndex];

      if (currentSectionConfig && currentSection) {
        const isAtTop = currentSection.scrollTop <= 0;
        const isAtBottom =
          currentSection.scrollHeight - currentSection.scrollTop <=
          currentSection.clientHeight + 1;

        if ((e.deltaY > 0 && !isAtBottom) || (e.deltaY < 0 && !isAtTop)) {
          return;
        }
      }

      e.preventDefault();
      const scrollDown = e.deltaY > 0;
      setDirection(scrollDown ? 1 : -1);

      if (scrollDown && currentSectionIndex < sections.length - 1) {
        sectionRefs.current[currentSectionIndex + 1]?.scrollIntoView({
          behavior: "smooth",
        });
        setCurrentSectionIndex(currentSectionIndex + 1);
      } else if (!scrollDown && currentSectionIndex > 0) {
        sectionRefs.current[currentSectionIndex - 1]?.scrollIntoView({
          behavior: "smooth",
        });
        setCurrentSectionIndex(currentSectionIndex - 1);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setCurrentSectionIndex(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
      observer.disconnect();
    };
  }, [currentSectionIndex, sections]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" && currentSectionIndex < sections.length - 1) {
        e.preventDefault();
        sectionRefs.current[currentSectionIndex + 1]?.scrollIntoView({
          behavior: "smooth",
        });
        setCurrentSectionIndex(currentSectionIndex + 1);
      } else if (e.key === "ArrowUp" && currentSectionIndex > 0) {
        e.preventDefault();
        sectionRefs.current[currentSectionIndex - 1]?.scrollIntoView({
          behavior: "smooth",
        });
        setCurrentSectionIndex(currentSectionIndex - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSectionIndex, sections.length]);

  return (
    <main
      ref={containerRef}
      className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-black"
    >
      {sections.map((section, index) => (
        <section
          key={section.id}
          ref={(el) => {
            sectionRefs.current[index] = el as HTMLDivElement;
          }}
          className={`h-screen w-full flex items-center justify-center snap-start pt-4 ${
            section ? "overflow-y-auto" : ""
          } ${index > 0 ? "-mt-1" : ""}`}
          id={section.id}
        >
          <AnimatePresence mode="wait" custom={direction}>
            {currentSectionIndex === index && (
              <motion.div
                className="w-full h-full flex items-center justify-center"
                key={section.id}
                custom={direction}
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {section.component}
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      ))}
    </main>
  );
}
