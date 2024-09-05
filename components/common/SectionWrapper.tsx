import { wrapperClassProps } from "@/utils/types";
import React from "react";

const SectionWrapper = ({
  children,
  desc,
  title,
  style,
  widthStyle,
  ...props
}: wrapperClassProps) => {
  return (
    <section className="py-12 md:py-20 px-6 md:px-8" style={style} {...props}>
      <div className="max-w-3xl mx-auto flex flex-col gap-8" style={widthStyle}>
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
          <p className="text-muted-foreground text-lg md:text-xl">{desc}</p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
