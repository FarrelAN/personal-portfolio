"use client";
import HeroSection from "./components/sections/HeroSection";
import Navbar from "./components/sections/Navbar";
import AboutComponent from "./components/ui/AboutComponent";
import ProjectsSection from "./components/sections/ProjectsSection";
import EmailSection from "./components/sections/EmailSection";
import Footer from "./components/ui/Footer";
import Sidebar from "./components/ui/Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col max-w-screen">
      <Sidebar />
      <div className="container mx-auto px-12 ">
        <HeroSection />
        <AboutComponent />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
