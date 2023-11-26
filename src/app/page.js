"use client";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutComponent from "./components/AboutComponent";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col max-w-screen">
      <Navbar />
      <Sidebar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutComponent />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
