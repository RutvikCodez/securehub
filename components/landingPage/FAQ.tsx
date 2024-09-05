import { accrodianData } from "@/utils/data";
import React from "react";
import Accordian from "../common/Accordian";
import SectionWrapper from "../common/SectionWrapper";

const FAQ = () => {
  return (
    <SectionWrapper
      desc="Got questions? We've got answers."
      title="FAQ"
      style={{ backgroundColor: "hsl(var(--muted))" }}
    >
      <div className="flex flex-col gap-4">
        {accrodianData.map(({ desc, title }, index) => (
          <Accordian desc={desc} title={title} key={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FAQ;
