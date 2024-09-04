
import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const Contact = () => {
  return (
    <section className="py-12 md:py-20 px-6 md:px-8">
      <div className="max-w-3xl mx-auto flex flex-col gap-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold">Contact Us</h2>
        <p className="text-muted-foreground text-lg md:text-xl">
          Have a question or need help? Get in touch.
        </p>
        <form className="bg-muted rounded-md p-6 md:p-8 flex flex-col gap-4 text-left">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" placeholder="John Doe" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="example@domain.com" />
            </div>
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              rows={5}
              placeholder="How can we help you?"
            />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
