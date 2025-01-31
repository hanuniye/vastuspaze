"use client";

import { useState } from "react";

import logo from "@/assets/logo.webp";
import { Menu, X } from "lucide-react";
import { LINKS } from "@/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b-2">
      <div className="flex justify-between items-center max-w-7xl mx-auto h-[90px]">
        {/* logo  */}
        <div className="pl-2">
          <img src={logo.src} width={150} height={15} alt="Vastu Spaze Logo" />
        </div>

        {/* hamburger */}
        <div className="md:hidden">
          <button
            className="text-2xl pr-2 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* nav links */}
        <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
          {LINKS.map((link, i) => {
            return (
              <a
                href={link.link}
                key={i}
                className="text-sm uppercase font-medium"
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* mobile nav */}
        <div
          className={`md:hidden absolute top-[91px] right-0 w-full  py-5 px-4 border-b-4 bg-neutral-50 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {LINKS.map((link, i) => {
            return (
              <a
                href={link.link}
                key={i}
                className="text-lg uppercase font-medium block py-2 tracking-wide"
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
