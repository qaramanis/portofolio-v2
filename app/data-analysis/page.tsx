"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import BackgroundImage from "@/components/experience/background-image";
import BackButton from "@/components/back-button";
import DataAnalysisOverview from "@/components/data-analysis/overview";
import DataAnalysisSkills from "@/components/data-analysis/skills";
import DataAnalysisProjects from "@/components/data-analysis/projects";

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundImage hoverIndex={null} />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="mb-16">
          <BackButton />
          <Separator className="my-8 bg-white/20" />
          <DataAnalysisOverview />
          <Separator className="my-8 bg-white/20" />
          <DataAnalysisSkills />
          <Separator className="my-8 bg-white/20" />
          <DataAnalysisProjects />
        </div>

        {/* <WebDevProjects />
        <ContactSection /> */}
      </div>
    </main>
  );
}
