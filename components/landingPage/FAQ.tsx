import { accrodianData } from "@/utils/data";
import React from "react";
import Accordian from "../common/Accordian";

const FAQ = () => {
  return (
    <section className="bg-muted py-12 md:py-20 px-6 md:px-8">
      <div className="max-w-3xl mx-auto flex flex-col gap-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold">FAQ</h2>
        <p className="text-muted-foreground text-lg md:text-xl">
          {"Got questions? We've got answers."}
        </p>
        <div className="flex flex-col gap-4">
          {accrodianData.map(({ desc, title }, index) => (
            <Accordian desc={desc} title={title} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
