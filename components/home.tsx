"use client";

import AnimatedMenu from "@/components/animated-menu/animated-menu";
import Timeline from "@/components/timeline/timeline";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const menuSectionRef = useRef<HTMLDivElement>(null);
  const timelineSectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const timelineElement = timelineSectionRef.current;
      if (currentSection === 1 && timelineElement) {
        const isAtTop = timelineElement.scrollTop <= 0;
        const isAtBottom =
          timelineElement.scrollHeight - timelineElement.scrollTop <=
          timelineElement.clientHeight + 1;

        if ((e.deltaY > 0 && !isAtBottom) || (e.deltaY < 0 && !isAtTop)) {
          return;
        }
      }

      e.preventDefault();

      const scrollDown = e.deltaY > 0;

      if (scrollDown && currentSection === 0) {
        timelineSectionRef.current?.scrollIntoView({ behavior: "smooth" });
        setCurrentSection(1);
      } else if (!scrollDown && currentSection === 1) {
        menuSectionRef.current?.scrollIntoView({ behavior: "smooth" });
        setCurrentSection(0);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === menuSectionRef.current) {
              setCurrentSection(0);
            } else if (entry.target === timelineSectionRef.current) {
              setCurrentSection(1);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (menuSectionRef.current) observer.observe(menuSectionRef.current);
    if (timelineSectionRef.current)
      observer.observe(timelineSectionRef.current);

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
  }, [currentSection]);

  return (
    <main
      ref={containerRef}
      className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth"
    >
      <section
        ref={menuSectionRef}
        className="h-screen w-full flex items-center justify-center snap-start"
        id="menu-section"
      >
        <AnimatedMenu />
      </section>

      <section
        ref={timelineSectionRef}
        className="h-screen w-full flex items-center justify-center snap-start overflow-y-auto"
        id="timeline-section"
      >
        <Timeline />
      </section>
    </main>
  );
}
