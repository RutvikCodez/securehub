import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import SectionWrapper from "../common/SectionWrapper";
import CommonLabel from "../common/CommonLabel";
import CommonInput from "../common/CommonInput";
import CommonButton from "../common/CommonButton";

const EmailValidator = () => {
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
          />
          <CommonButton name="Validate" type="submit" />
        </div>
        <div className="text-muted-foreground text-sm">
          Our email validator checks for common typos, invalid domains, and
          other issues to ensure your emails reach their destination.
        </div>
      </form>
    </SectionWrapper>
  );
};

export default EmailValidator;
