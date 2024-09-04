import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const EmailValidator = () => {
  return (
    <section className="py-12 md:py-20 px-6 md:px-8">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold">Email Validator</h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Ensure your emails are deliverable with our instant validation.
          </p>
        </div>
        <form className="bg-muted rounded-md p-6 md:p-8 flex flex-col gap-4">
          <Label htmlFor="email">Enter an email address:</Label>
          <div className="flex gap-2">
            <Input
              type="email"
              id="email"
              placeholder="example@domain.com"
              className="flex-1"
            />
            <Button type="submit">Validate</Button>
          </div>
          <div className="text-muted-foreground text-sm">
            Our email validator checks for common typos, invalid domains, and
            other issues to ensure your emails reach their destination.
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailValidator;
