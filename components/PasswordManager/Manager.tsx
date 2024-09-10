import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { KeyIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  generatorLabelCheckboxData,
  managerButtonData,
  passwordData,
} from "@/utils/data";

const Manager = () => {
  return (
    // <div className="rounded-lg border bg-background p-6 shadow-sm flex flex-col gap-6">
    //   <div>
    //     <h2 className="text-2xl font-bold">Password Manager</h2>
    //     <p className="text-muted-foreground">
    //       Securely store and manage your passwords.
    //     </p>
    //   </div>
    // <div className="flex flex-col gap-4">
    //   <form className="grid grid-cols-1 gap-4">
    //     <div className="grid grid-cols-3 gap-4">
    //       <div>
    //         <Label htmlFor="website">Website</Label>
    //         <Input id="website" type="text" placeholder="example.com" />
    //       </div>
    //       <div>
    //         <Label htmlFor="username">Username</Label>
    //         <Input id="username" type="text" placeholder="johndoe" />
    //       </div>
    //       <div>
    //         <Label htmlFor="password">Password</Label>
    //         <div className="relative">
    //           <Input id="password" type="password" />
    //           <Button
    //             variant="ghost"
    //             size="icon"
    //             className="absolute right-2 top-1/2 -translate-y-1/2"
    //           >
    //             <KeyIcon className="h-5 w-5" />
    //             <span className="sr-only">Generate Password</span>
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex justify-end gap-2">
    //       <Button variant="outline">Delete</Button>
    //       <Button variant="outline">Edit</Button>
    //       <Button type="submit">Save</Button>
    //     </div>
    //   </form>
    //   <div className="rounded-lg border bg-muted p-4">
    //       <div className="flex items-center justify-between">
    //         <div>
    //           <div className="font-medium">example.com</div>
    //           <div className="text-muted-foreground">johndoe</div>
    //         </div>
    //         <div className="font-mono">****</div>
    //       </div>
    //     </div>
    //     <div className="rounded-lg border bg-muted p-4">
    //       <div className="flex items-center justify-between">
    //         <div>
    //           <div className="font-medium">github.com</div>
    //           <div className="text-muted-foreground">janedoe</div>
    //         </div>
    //         <div className="font-mono">****</div>
    //       </div>
    //     </div>
    //     <div className="rounded-lg border bg-muted p-4">
    //       <div className="flex items-center justify-between">
    //         <div>
    //           <div className="font-medium">twitter.com</div>
    //           <div className="text-muted-foreground">bobsmith</div>
    //         </div>
    //         <div className="font-mono">****</div>
    //       </div>
    //     </div>
    //     <div className="rounded-lg border bg-muted p-4">
    //       <div className="flex items-center justify-between">
    //         <div>
    //           <div className="font-medium">amazon.com</div>
    //           <div className="text-muted-foreground">alicejones</div>
    //         </div>
    //         <div className="font-mono">****</div>
    //       </div>
    //     </div>
    //     <div className="rounded-lg border bg-muted p-4">
    //       <div className="flex items-center justify-between">
    //         <div>
    //           <div className="font-medium">netflix.com</div>
    //           <div className="text-muted-foreground">davidlee</div>
    //         </div>
    //         <div className="font-mono">****</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Card>
      <CardHeader>
        <CardTitle className="font-bold">Password Manager</CardTitle>
        <CardDescription className="text-muted-foreground">
          Securely store and manage your passwords.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <form className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-3 gap-4">
            {generatorLabelCheckboxData.map(
              ({ id, placeholder, type }, index) => (
                <div key={index}>
                  <Label htmlFor={id} className="capitalize">
                    {id}
                  </Label>
                  <Input id={id} type={type} placeholder={placeholder} />
                </div>
              )
            )}
          </div>
          <div className="flex justify-end gap-2">
            {managerButtonData.map(({ name, type, variant }, index) => (
              <Button key={index} variant={variant} type={type}>
                {name}
              </Button>
            ))}
          </div>
        </form>
        {passwordData.map(({ name, website }, index) => (
          <div key={index} className="rounded-lg border bg-muted p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{website}</div>
                <div className="text-muted-foreground">{name}</div>
              </div>
              <div className="font-mono">****</div>
            </div>
          </div>
        ))}
        <Button type="submit">Generate Password</Button>
      </CardContent>
    </Card>
  );
};

export default Manager;
