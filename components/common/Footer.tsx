import React from "react";
import { LockIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-6 px-6 md:px-8">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <LockIcon className="h-6 w-6" />
          <span className="font-bold text-lg">SecureHub</span>
        </div>
        <nav className="flex items-center gap-6">
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Security
          </Link>
        </nav>
        <p className="text-sm">&copy; 2024 SecureHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
