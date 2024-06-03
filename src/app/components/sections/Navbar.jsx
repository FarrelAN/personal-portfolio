"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "../ui/NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "../ui/MenuOverlay";
import { useRouter, navigate } from "next/navigation";
import Image from "next/image";
import Logo1 from "@/public/images/logo1.svg";

const navLinks = [
  {
    title: "About",
    path: "/#about",
  },
  {
    title: "Projects",
    path: "/#projects",
  },
  {
    title: "Contact",
    path: "/#contact",
  },
  {
    title: "ExpenseTrack",
    path: "/expense-track",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-30 backdrop-blur-md bg-gradient-to-r shadow-lg">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="flex items-center text-2xl md:text-5xl text-white font-semibold"
        >
          Farrel
          <Image
            src={Logo1}
            alt="Logo"
            width={40}
            height={40}
            className="mx-2"
          />
          AN
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
