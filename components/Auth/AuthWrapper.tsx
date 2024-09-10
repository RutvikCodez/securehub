import Image from "next/image";
import React from "react";
import WhyUS from "@/public/static/images/whyChooseUs.jpg";
import { authWrapperDataType } from "@/utils/types";

const AuthWrapper = ({ children, desc, title }: authWrapperDataType) => {
  return (
    <section className="grid grid-cols-2 max-w-5xl w-full mx-auto shadow-lg shadow-black rounded-accent-1 items-center max-xl:max-w-4xl max-lg:max-w-2xl max-lg:grid-cols-1 max-md:max-w-sm">
      <div className="flex w-full justify-start max-lg:hidden">
        <div className="relative w-[444px] h-[516px] max-xl:w-[400px]">
          <Image
            alt="Why Choose Us Image Abmient"
            src={WhyUS}
            fill
            className="rounded-accent-1"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 pr-10 max-lg:p-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-accent-4 font-semibold">{title}</h2>
          <p className="text-2">{desc}</p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default AuthWrapper;
