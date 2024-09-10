import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import { contactFormData } from "@/utils/data";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const Contact = () => {
  return (
    <SectionWrapper
      desc="Have a question or need help? Get in touch."
      title="Contact Us"
    >
      <form className="bg-muted rounded-md p-6 md:p-8 flex flex-col gap-4 text-left">
        <div className="grid md:grid-cols-2 gap-4">
          {contactFormData.map(
            ({ id, labelName, placeholder, type }, index) => (
              <div key={index}>
                <Label htmlFor={id}>{labelName}</Label>
                <Input type={type} id={id} placeholder={placeholder} />
              </div>
            )
          )}
        </div>
        <div>
          <Label id="message">Message</Label>
          <Textarea id="message" rows={5} placeholder="How can we help you?" />
        </div>
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </SectionWrapper>
  );
};

export default Contact;
