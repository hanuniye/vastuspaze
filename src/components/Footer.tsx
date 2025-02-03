import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center space-y-3 py-4 md:flex-row md:justify-between md:items-center max-w-7xl mx-auto">
      <div className="flex items-center space-x-3">
        <Facebook className="cursor-pointer " />
        <Twitter className="cursor-pointer " />
        <Instagram className="cursor-pointer " />
      </div>
      <p className="text-sm text-neutral-500">
        © 2021 VastuSpaze. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
