import React from "react";
import Link from "next/link";

const Header = () => {
  const navbarData = ["Email Validator", "Password Manager"];
  return (
    <header className="bg-accent-1 text-white flex justify-center items-center h-[10vh]">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <h2 className="text-accent-1 font-bold">SecureHub</h2>
        <ul className="flex gap-5">
          {navbarData.map((item, index) => (
            <li key={index}>
              <Link href={"#"}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
