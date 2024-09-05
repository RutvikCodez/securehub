import { passwordManagerData } from "@/utils/data";
import Link from "next/link";
import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import CommonLink from "../common/CommonLink";

const PasswordManager = () => {
  return (
    <SectionWrapper
      desc="Generate and store secure passwords with ease."
      title="Password Manager"
      style={{ backgroundColor: "hsl(var(--muted))" }}
    >
      <div className="grid md:grid-cols-2 gap-6 bg-background rounded-md p-6 md:p-8">
        {passwordManagerData.map(({ desc, title }, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-muted-foreground">{desc}</p>
          </div>
        ))}
        <CommonLink
          link="#"
          name="Learn More"
          style={{
            backgroundColor: "hsl(var(--primary))",
            color: "hsl(var(--primary-foreground))",
            width: 'fit-content',
          }}
        />
      </div>
    </SectionWrapper>
  );
};

export default PasswordManager;
