import React from "react";
import { LockIcon } from "lucide-react";
import { footerLinkData } from "@/utils/data";
import CommonLink from "./CommonLink";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-6 px-6 md:px-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <LockIcon className="h-6 w-6" />
          <span className="font-bold text-lg">SecureHub</span>
        </div>
        <nav className="flex items-center gap-6">
          {footerLinkData.map(({ link, name }, index) => (
            <CommonLink link={link} name={name} key={index} style={{
              padding: "0px"
            }} />
          ))}
        </nav>
        <p className="text-sm">&copy; 2024 SecureHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
