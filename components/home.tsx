"use client";
import { useEffect, useRef, useState, ReactNode } from "react";
import AnimatedMenu from "@/components/animated-menu/animated-menu";
import Timeline from "@/components/timeline/timeline";
import Hero from "./hero/hero";
import CopyrightWatermark from "./copyright-watermark";

type Section = {
  id: string;
  component: ReactNode;
  allowInternalScroll?: boolean;
};

export default function Home() {
  const sections: Section[] = [
    { id: "menu-section", component: <AnimatedMenu /> },
    { id: "hero-section", component: <Hero /> },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>(
    Array(sections.length).fill(null)
  );
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

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
  }, [currentSectionIndex, sections.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" && currentSectionIndex < sections.length - 1) {
        sectionRefs.current[currentSectionIndex + 1]?.scrollIntoView({
          behavior: "smooth",
        });
        setCurrentSectionIndex(currentSectionIndex + 1);
      } else if (e.key === "ArrowUp" && currentSectionIndex > 0) {
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
          {section.component}
        </section>
      ))}
      <CopyrightWatermark />
    </main>
  );
}
