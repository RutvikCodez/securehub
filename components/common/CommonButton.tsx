import React from "react";
import { Button } from "../ui/button";
import { buttonProps } from "@/utils/types";

const CommonButton = ({
  name,
  type,
  className,
  variant,
  size,
  onClick,
}: buttonProps) => {
  return (
    <Button
      type={type}
      className={className}
      variant={variant}
      onClick={onClick}
      size={size}
    >
      {name}
    </Button>
  );
};

export default CommonButton;
