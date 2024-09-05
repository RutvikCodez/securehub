import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { pricingCardProps } from "@/utils/types";
import CommonButton from "./CommonButton";

const PricingCard = ({ data, desc, title, ...props }: pricingCardProps) => {
  return (
    <Card className="bg-muted p-6 md:p-8 flex flex-col gap-4" {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <div className="flex flex-col h-full justify-between">
      <CardContent>
        <div className="flex flex-col gap-2">
          {data?.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <span>{item}</span>
              <span>✓</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <CommonButton className="w-full" name="Get Started" />
      </CardFooter>
      </div>
    </Card>
  );
};

export default PricingCard;
