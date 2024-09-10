import React from "react";
import AuthWrapper from "./AuthWrapper";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

const Signup = () => {
  const loginData = [
    {
      name: "Usename",
      type: "text",
      placeholder: "Enter your name",
      id: "name",
    },
    {
      name: "Email",
      type: "email",
      placeholder: "Enter your email",
      id: "email",
    },
    {
      name: "Password",
      type: "password",
      placeholder: "Enter your password",
      id: "password",
    },
  ];
  return (
    <AuthWrapper title="Create an account" desc="Enter your email below to create your account">
      <form className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          {loginData.map(({ id, name, placeholder, type }, index) => (
            <div key={index}>
              <Label htmlFor={id} className="font-semibold">
                {name}
              </Label>
              <Input
                type={type}
                placeholder={placeholder}
                id={id}
                className="border border-black"
              />
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="text-right">
            <span>{"Already have an account?"}</span>
            <Link href={"/login"} className="text-indigo-500">Signin</Link>
          </p>
          <Button className="font-semibold w-full">Create Account</Button>
        </div>
      </form>
    </AuthWrapper>
  );
};

export default Signup;
