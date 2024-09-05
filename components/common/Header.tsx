import { headerLinkData } from "@/utils/data";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { MenuIcon, LockIcon } from "lucide-react";
import CommonLink from "./CommonLink";
import CommonButton from "./CommonButton";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 md:px-8 flex items-center justify-between">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <LockIcon className="h-6 w-6" />
        <span className="font-bold text-lg">SecureHub</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        {headerLinkData.map(({ link, name }, index) => (
          <CommonLink
            link={link}
            name={name}
            key={index}
            style={{
              padding: "0px",
            }}
          />
        ))}
      </nav>
      <CommonButton
        name={<MenuIcon className="h-6 w-6" />}
        className="md:hidden"
        variant={"outline"}
      />
    </header>
  );
};

export default Header;
