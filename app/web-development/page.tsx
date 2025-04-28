"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import WebDevOverview from "@/components/web-development/web-dev-overview";
import BackgroundImage from "@/components/experience/background-image";
import BackButton from "@/components/back-button";
import WebDevSkills from "@/components/web-development/skills";
import WebDevProjects from "@/components/web-development/projects";

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundImage hoverIndex={null} />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="mb-16">
          <BackButton />
          <Separator className="my-8 bg-white/20" />
          <WebDevOverview />
          <Separator className="my-8 bg-white/20" />
          <WebDevSkills />
          <Separator className="my-8 bg-white/20" />
          <WebDevProjects />
        </div>

        {/* <WebDevProjects />
        <ContactSection /> */}
      </div>
    </main>
  );
}
