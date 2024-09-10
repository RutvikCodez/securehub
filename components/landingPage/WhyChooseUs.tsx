import React from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import WhyUS from "@/public/static/images/whyChooseUs.jpg";

const WhyChooseUs = () => {
  const whyChooseUsSectionData = [
    "Secure Email Validation",
    "Robust Password Management",
    "Advanced Encrypted Storage",
    "Efficient Team Sharing",
  ];
  return (
    <section className="py-12 md:py-20 max-w-7xl w-full mx-auto grid grid-cols-2 items-center max-xl:max-w-4xl max-xl:grid-cols-1 max-lg:max-w-2xl max-lg:gap-y-5 max-md:max-w-sm">
      <div className="flex flex-col gap-5 order-1 max-xl:order-2">
        <h3 className="text-accent-2 text-3 font-normal">Why Choose Us</h3>
        <h2 className="text-accent-4 text-4 leading-accent-1 font-semibold">
          Unmatched Expertise in Safeguarding Your Digital Assets
        </h2>
        <p className="text-accent-2 text-2 font-light leading-accent-3">
          At Secure Hub, we provide unparalleled support to fortify your online
          security. Our solutions are designed to ensure your sensitive
          information remains protected and easily managed.
        </p>
        <ul className="grid grid-cols-2 w-full justify-between gap-y-3 max-md:grid-cols-1">
          {whyChooseUsSectionData.map((item, index) => (
            <li
              key={index}
              className="text-accent-2 font-normal leading-accent-1 flex gap-2 items-center "
            >
              <span>
                <CheckCircle />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex w-full justify-end order-2 max-xl:order-1 max-xl:justify-center">
        <div className="relative w-[444px] h-[516px]">
          <Image alt="Why Choose Us Image Abmient" src={WhyUS} fill />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
