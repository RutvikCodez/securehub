import { linkType } from "@/utils/types";
import Link from "next/link";
import React from "react";

const CommonLink = ({ link, name, style, ...props }: linkType) => {
  return (
    <Link
      href={link}
      className="inline-flex items-center justify-center rounded-md px-6 py-3 font-mediumtext-primary-foreground transition-colors hover:bg-primary/90 focus:outline-nonefocus:ring-2 focus:ring-primary focus:ring-offset-2"
      style={style}
      prefetch={false}
      {...props}
    >
      {name}
    </Link>
  );
};

export default CommonLink;
