import { heroSectionLinkData } from "@/utils/data";
import React from "react";
import CommonLink from "../common/CommonLink";

const Hero = () => {
  return (
    <section className="bg-primary py-12 md:py-20 px-6 md:px-8 text-center text-primary-foreground">
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          Secure Your Digital Life
        </h1>
        <p className="text-lg md:text-xl">
          Protect your email and passwords with our powerful tools.
        </p>
        <div className="flex justify-center gap-4 max-md:flex-col">
          {heroSectionLinkData.map(({ style, link, name }, index) => (
            <CommonLink link={link} name={name} key={index} style={style} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
