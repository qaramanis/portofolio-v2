import React, { useState } from "react";
import { Linkedin, Github, Mail } from "lucide-react";

interface NavItem {
  id: number;
  label: string;
  href: string;
  icon: React.ReactNode;
}

const OsmoVerticalNavigation: React.FC = () => {
  const navItems: NavItem[] = [
    {
      id: 1,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/apostolos-karamanis/",
      icon: <Linkedin size={32} />,
    },
    {
      id: 2,
      label: "GitHub",
      href: "https://github.com/qaramanis",
      icon: <Github size={32} />,
    },
    {
      id: 3,
      label: "Mail",
      href: "mailto:apostkaram@gmail.com",
      icon: <Mail size={32} />,
    },
  ];

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const getSiblingClass = (index: number): string => {
    if (hoverIndex === null) return "";

    const distance = Math.abs(index - hoverIndex);

    if (distance === 0) return "hover";
    if (distance === 1) return "sibling-close";
    if (distance === 2) return "sibling-far";

    return "";
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 pointer-events-none">
      <ul className="flex flex-col justify-center items-end gap-0 m-0 p-0 text-[1.4vw]">
        {navItems.map((item, index) => (
          <li
            key={item.id}
            className={`flex justify-center items-center relative transition-[height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              getSiblingClass(index) === "hover"
                ? "h-[4em]"
                : getSiblingClass(index) === "sibling-close"
                ? "h-[3.5em]"
                : getSiblingClass(index) === "sibling-far"
                ? "h-[3em]"
                : "h-[2.5em]"
            }`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <a
              href={item.href}
              className="z-10 pointer-events-auto flex justify-center items-center w-10 h-full px-1 py-1 relative text-gray-800 hover:text-blue-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
            <div
              className={`
                absolute right-full mr-2 z-0 whitespace-nowrap rounded-[0.25em] 
                p-[0.4em_0.5em] text-base font-normal text-gray-800
                transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${
                  hoverIndex === index
                    ? "opacity-100 transform translate-x-[-10%]"
                    : "opacity-0 transform translate-x-[30%]"
                }
              `}
            >
              {item.label}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OsmoVerticalNavigation;
