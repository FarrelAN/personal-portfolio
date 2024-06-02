"use client";
import HeroSection from "./components/sections/HeroSection";
import AboutComponent from "./components/ui/AboutComponent";
import ProjectsSection from "./components/sections/ProjectsSection";
import EmailSection from "./components/sections/EmailSection";
import Footer from "./components/ui/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col max-w-screen overflow-hidden">
      <div className="container mx-auto px-12 relative z-10">
        <HeroSection />
        <AboutComponent />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
