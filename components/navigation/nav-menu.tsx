"use client";

import React, { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
// import ThemeToggle from "@/components/theme/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import GradientText from "@/components/gradient-text";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero-section" },
  { label: "About", href: "#about-section" },
  { label: "Services", href: "#menu-section" },
  // { label: "Contact", href: "#contact-section" },
];

export default function NavMenu() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Update active item based on scroll position
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.substring(1));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveItem(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleMenuClick = (href: string) => {
    const sectionId = href.substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        section.scrollIntoView({ behavior: "auto" });
        setMobileMenuOpen(false);
      } else {
        section.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-full z-50 bg-background/10 backdrop-blur-md border-b border-white/10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto flex justify-between items-center h-16 px-4">
          <div className="flex items-center">
            <GradientText className="text-xl font-bold">AK</GradientText>
          </div>

          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-6">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      href={item.href}
                      className={cn(
                        "text-sm font-medium transition-colors duration-300 px-3 py-2 rounded-md",
                        activeItem === item.href.substring(1)
                          ? "text-white bg-primary/20"
                          : "text-white/70 hover:text-white hover:bg-primary/10 rounded-full"
                      )}
                      onClick={(e) => {
                        e.preventDefault();
                        handleMenuClick(item.href);
                      }}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center justify-center gap-4 h-full">
            <button
              className="md:hidden text-white/70 hover:text-white p-1 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu - Separate from the navigation bar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed z-40 top-16 left-0 right-0 bottom-0 bg-black"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "calc(100vh - 64px)", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 py-12">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  className={cn(
                    "text-2xl font-medium py-4 px-8 w-64 text-center",
                    activeItem === item.href.substring(1)
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  )}
                  onClick={() => handleMenuClick(item.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.div
                className="absolute bottom-6 left-0 w-full text-center text-white/40 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                © 2025 Apostolos Karamanis
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
