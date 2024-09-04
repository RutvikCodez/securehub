import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ChevronDownIcon } from "lucide-react";
import { pricingCardProps } from "@/utils/types";

const Accordian = ({ desc, title, ...props }: pricingCardProps) => {
  return (
    <Collapsible {...props}>
      <CollapsibleTrigger className="flex items-center justify-between w-full bg-background rounded-t-md px-6 py-4 text-left">
        <span>{title}</span>
        <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
      </CollapsibleTrigger>
      <CollapsibleContent className="bg-background rounded-b-md px-6 py-4 text-muted-foreground">
        {desc}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default Accordian;
