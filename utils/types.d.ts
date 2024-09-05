import React from "react";

export type pricingCardProps = {
  title: string;
  desc: string;
  data?: string[];
};

export type linkDataType = {
  name: string;
  link: string;
  style?: React.CSSProperties | undefined;
}[];

export type wrapperClassProps = {
  title: string;
  desc: string;
  style?: React.CSSProperties | undefined;
  children: React.ReactNode;
  widthStyle?: React.CSSProperties | undefined;
};

export type linkType = {
  name: string;
  link: string;
  style?: React.CSSProperties | undefined;
};

export type labelProps = {
  id: string;
  name: string;
};

export type inputProps = {
  type: string;
  id: string;
  placeholder: string;
  className?: string;
};

export type buttonProps = {
  type?: "submit" | "reset" | "button" | undefined;
  name: string | React.JSX.Element;
  className?: string;
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined
};

export type textAreaProps = {
  id: string
  rows: number
  placeholder: string
}
