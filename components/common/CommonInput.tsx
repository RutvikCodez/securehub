import React from "react";
import { Input } from "../ui/input";
import { inputProps } from "@/utils/types";

const CommonInput = ({ className, id, placeholder, type }: inputProps) => {
  return (
    <Input
      type={type}
      id={id}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default CommonInput;
