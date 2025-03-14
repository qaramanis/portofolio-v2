"use client";

import CatchMeIfYouCan from "@/components/loader/catch-me-if-you-can";
import Home from "@/components/home";
import PageLoader from "@/components/loader/page-loader";

export default function Page() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <PageLoader />
      <Home />
    </main>
  );
}
