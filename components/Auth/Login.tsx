import React from "react";
import AuthWrapper from "./AuthWrapper";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

const Login = () => {
  const loginData = [
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
    <AuthWrapper title="Login" desc="Access Your Secure Hub Account">
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
            <span>{"Don't have an account?"}</span>
            <Link href={"/signup"} className="text-indigo-500">Signup</Link>
          </p>
          <Button className="font-semibold w-full">Login</Button>
        </div>
      </form>
    </AuthWrapper>
  );
};

export default Login;
