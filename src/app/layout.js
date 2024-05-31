import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/sections/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FarrelAN - Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Navbar />
        <div className="pt-20">
          {" "}
          {/* Add padding-top to ensure visibility */}
          {children}
        </div>
      </body>
    </html>
  );
}
