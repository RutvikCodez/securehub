import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="h-[90vh] relative">
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
      <div className="absolute inset-0 flex flex-col items-start justify-center gap-6 z-20 text-white max-w-3xl px-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-accent-3 font-bold leading-tight">
            Streamline Your Security with Secure Hub
          </h1>
          <p className="text-muted-foreground">
            Effortlessly manage passwords, validate emails, and store data
            securely with advanced features. Enjoy seamless integration and
            dedicated support.
          </p>
        </div>
        <Button className="bg-gradient-accent-3 font-semibold transition-all ease-in-out duration-300 hover:bg-gradient-accent-2 hover:text-black rounded-none py-5 px-8 text-accent-2">
          Get Started
        </Button>
      </div>
      <div className="relative h-full">
        <Image alt="Hero Image Ambient" src={"/static/images/hero.jpg"} fill />
      </div>
    </section>
  );
};

export default Hero;
