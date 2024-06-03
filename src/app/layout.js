import "./globals.css";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./components/sections/Navbar"), {
  ssr: false,
});
const GradientBackground = dynamic(
  () => import("./components/ui/GradientBackground"),
  { ssr: false }
);
const Sidebar = dynamic(() => import("@/src/app/components/ui/Sidebar"), {
  ssr: false,
});

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
