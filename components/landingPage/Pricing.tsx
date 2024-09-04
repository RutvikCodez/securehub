import { pricingCardData } from "@/utils/data";
import React from "react";
import PricingCard from "../common/PricingCard";

const Pricing = () => {
  return (
    <section className="py-12 md:py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold">Pricing</h2>
        <p className="text-muted-foreground text-lg md:text-xl">
          Choose the plan that fits your needs.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingCardData.map(({ data, desc, title }, index) => (
            <PricingCard data={data} desc={desc} title={title} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
