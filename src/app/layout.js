import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/sections/Navbar";
import GradientBackground from "./components/ui/GradientBackground";
import Sidebar from "@/src/app/components/ui/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FarrelAN - Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="/bubbles.js" defer></script>
      </head>
      <body className={`${inter.className} text-white`}>
        <Navbar />
        <Sidebar />
        <svg>
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
        <GradientBackground />
        <div>{children}</div>
      </body>
    </html>
  );
}
