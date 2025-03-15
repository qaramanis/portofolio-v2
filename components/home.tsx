"use client";
import { useEffect, useRef, useState, ReactNode } from "react";
import AnimatedMenu from "@/components/animated-menu/animated-menu";
import Hero from "./hero/hero";
import CopyrightWatermark from "./copyright-watermark";
import Contact from "./contact/contact";
import { AnimatePresence, motion, Variants } from "framer-motion";

type Section = {
  id: string;
  component: ReactNode;
  allowInternalScroll?: boolean;
};

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

const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Home() {
  const sections: Section[] = [
    { id: "hero-section", component: <Hero /> },
    { id: "menu-section", component: <AnimatedMenu /> },
    { id: "contact-section", component: <Contact /> },
  ];

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

      if (currentSectionConfig.allowInternalScroll && currentSection) {
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
      // Prevent default arrow key behavior (scrolling)
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();

        // Get the current index directly from the DOM
        const visibleSectionIndex = Array.from(sectionRefs.current).findIndex(
          (section) => {
            if (!section) return false;
            const rect = section.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
        );

        const currentIdx =
          visibleSectionIndex !== -1
            ? visibleSectionIndex
            : currentSectionIndex;

        if (e.key === "ArrowDown" && currentIdx < sections.length - 1) {
          const nextIdx = currentIdx + 1;
          setDirection(1);
          sectionRefs.current[nextIdx]?.scrollIntoView({ behavior: "smooth" });
          setCurrentSectionIndex(nextIdx);
        } else if (e.key === "ArrowUp" && currentIdx > 0) {
          const prevIdx = currentIdx - 1;
          setDirection(-1);
          sectionRefs.current[prevIdx]?.scrollIntoView({ behavior: "smooth" });
          setCurrentSectionIndex(prevIdx);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sections.length]); // Remove currentSectionIndex from dependencies
  return (
    <main
      ref={containerRef}
      className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth"
    >
      {sections.map((section, index) => (
        <section
          key={section.id}
          ref={(el) => {
            sectionRefs.current[index] = el as HTMLDivElement;
          }}
          className={`h-screen w-full flex items-center justify-center snap-start ${
            section.allowInternalScroll ? "overflow-y-auto" : ""
          }`}
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
                {/* Removed the extra wrapping div that was limiting height */}
                {section.component}
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      ))}
      <CopyrightWatermark />
    </main>
  );
}
