// Home.jsx
"use client";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./components/sections/HeroSection"), {
  ssr: false,
});
const AboutComponent = dynamic(
  () => import("./components/sections/AboutComponent"),
  { ssr: false }
);
const ProjectsSection = dynamic(
  () => import("./components/sections/ProjectsSection"),
  { ssr: false }
);
const EmailSection = dynamic(
  () => import("./components/sections/EmailSection"),
  { ssr: false }
);
const Footer = dynamic(() => import("./components/sections/Footer"), {
  ssr: false,
});

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
