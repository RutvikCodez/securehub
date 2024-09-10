import Image from "next/image";
import React from "react";
import WhyUS from "@/public/static/images/whyChooseUs.jpg";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="w-full h-[90vh] justify-center items-center flex">
      {children}
    </main>
  );
};

export default layout;
