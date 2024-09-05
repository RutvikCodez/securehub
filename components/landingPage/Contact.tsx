import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import SectionWrapper from "../common/SectionWrapper";
import { contactFormData } from "@/utils/data";
import CommonLabel from "../common/CommonLabel";
import CommonInput from "../common/CommonInput";
import CommonButton from "../common/CommonButton";
import CommonTextArea from "../common/CommonTextArea";

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
                <CommonLabel id={id} name={labelName} />
                <CommonInput type={type} id={id} placeholder={placeholder} />
              </div>
            )
          )}
        </div>
        <div>
          <CommonLabel id={"message"} name={"Message"} />
          <CommonTextArea
            id="message"
            rows={5}
            placeholder="How can we help you?"
          />
        </div>
        <CommonButton name="Submit" className="w-full" type="submit" />
      </form>
    </SectionWrapper>
  );
};

export default Contact;
