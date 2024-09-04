import { headerLinkData } from "@/utils/data";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { MenuIcon, LockIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 md:px-8 flex items-center justify-between">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <LockIcon className="h-6 w-6" />
        <span className="font-bold text-lg">SecureHub</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        {headerLinkData.map(({ link, name }, index) => (
          <Link
            key={index}
            href={link}
            className="hover:underline"
            prefetch={false}
          >
            {name}
          </Link>
        ))}
      </nav>
      <Button variant="outline" className="md:hidden">
        <MenuIcon className="h-6 w-6" />
      </Button>
    </header>
  );
};

export default Header;
