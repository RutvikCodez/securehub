"use client";
import React, { useState } from "react";
import SectionWrapper from "../common/SectionWrapper";
import CommonLabel from "../common/CommonLabel";
import CommonInput from "../common/CommonInput";
import CommonButton from "../common/CommonButton";
import { validateEmail } from "@/utils/validateEmail";
import { validateEmailApiData } from "@/utils/types";

const EmailValidator = () => {
  const [email, setEmail] = useState<string>("");
  const [data, setData] = useState<validateEmailApiData>({
    domain: null,
    email: null,
    format_valid: null,
    user: null,
  });
  const validKey = ["domain", "email", "format_valid", "user"];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    const result = await validateEmail(email);
    setData(result);
    console.log(result);
  };

  return (
    <SectionWrapper
      desc="Ensure your emails are deliverable with our instant validation."
      title="Email Validator"
    >
      <form className="bg-muted rounded-md p-6 md:p-8 flex flex-col gap-4">
        <CommonLabel id="email" name="Enter an email address:" />
        <div className="flex gap-2">
          <CommonInput
            className="flex-1"
            id="email"
            placeholder="example@domain.com"
            type="email"
            value={email}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <CommonButton
            name="Validate"
            type="button"
            onClick={() => handleSubmit()}
          />
        </div>
        <div className="text-muted-foreground text-sm">
          Our email validator checks for common typos, invalid domains, and
          other issues to ensure your emails reach their destination.
        </div>
        <div className="grid grid-cols-2">
          {Object.entries(data)
            .filter(([key]) => validKey.includes(key))
            .map(
              ([key, value], index) =>
                value != null && (
                  <p key={index}>
                    <span className="capitalize font-semibold">
                      {key.replace(/_/g, "-")}
                    </span>{" "}
                    :
                    <span className="text-muted-foreground">
                      {" "}
                      {String(value)}
                    </span>
                  </p>
                )
            )}
        </div>
      </form>
    </SectionWrapper>
  );
};

export default EmailValidator;
