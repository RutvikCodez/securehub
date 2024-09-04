import { passwordManagerData } from "@/utils/data";
import Link from "next/link";
import React from "react";

const PasswordManager = () => {
  return (
    <section className="bg-muted py-12 md:py-20 px-6 md:px-8">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold">Password Manager</h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Generate and store secure passwords with ease.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 bg-background rounded-md p-6 md:p-8">
          {passwordManagerData.map(({ desc, title }, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-muted-foreground">{desc}</p>
            </div>
          ))}
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-fit"
            prefetch={false}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PasswordManager;
