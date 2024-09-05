import { pricingCardData } from "@/utils/data";
import React from "react";
import PricingCard from "../common/PricingCard";
import SectionWrapper from "../common/SectionWrapper";

const Pricing = () => {
  return (
    <SectionWrapper
      title="Pricing"
      desc="Choose the plan that fits your needs."
      widthStyle={{ maxWidth: "72rem" }}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingCardData.map(({ data, desc, title }, index) => (
          <PricingCard data={data} desc={desc} title={title} key={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Pricing;
