import React from "react";
import { Textarea } from "../ui/textarea";
import { textAreaProps } from "@/utils/types";

const CommonTextArea = ({ id, placeholder, rows }: textAreaProps) => {
  return <Textarea id={id} rows={rows} placeholder={placeholder} />;
};

export default CommonTextArea;
