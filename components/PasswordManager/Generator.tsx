import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CopyIcon } from "lucide-react";
import { ManagerLabelCheckboxData } from "@/utils/data";

const Generator = () => {
  return (
      <Card>
      <CardHeader>
        <CardTitle className="font-bold">Password Generator</CardTitle>
        <CardDescription className="text-muted-foreground">Create strong, unique passwords with ease.</CardDescription>
      </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="grid gap-2">
            <Label htmlFor="length">Password Length</Label>
            <Slider
              id="length"
              min={8}
              max={32}
              defaultValue={[16]}
              step={1}
              className="w-full"
            />
          </div>
          <div className="grid gap-2">
            <Label>Character Types</Label>
            <div className="grid grid-cols-2 gap-2">
              {ManagerLabelCheckboxData.map(({defaultChecked,id}, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Checkbox id={id} defaultChecked={defaultChecked} />
                  <Label htmlFor={id} className="capitalize">{id}</Label>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Generated Password</Label>
            <div className="relative">
              <Input id="password" type="text" readOnly value="Xt8#2Aq9Ks!" />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2"
              >
                <CopyIcon className="w-5 h-5" />
                <span className="sr-only">Copy password</span>
              </Button>
            </div>
          </div>
          <Button type="submit">Generate Password</Button>
        </CardContent>
      </Card>
  );
};

export default Generator;
