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
  id?: string;
  name: string;
};

export type inputProps = {
  type: string;
  id: string;
  placeholder: string;
  className?: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export type buttonProps = {
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  type?: "submit" | "reset" | "button" | undefined;
  name: string | React.JSX.Element;
  className?: string;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export type textAreaProps = {
  id: string;
  rows: number;
  placeholder: string;
};

export type validateEmailApiData = {
  domain: string | null;
  email: string | null;
  format_valid: boolean | null;
  user: string | null;
};

export type cardProps = {
  title?: string;
  desc?: string;
  children: React.ReactNode;
  footer?: string | React.JSX.Element;
};

export type managerButtonDataType = {
  name: string;
  variant?:
    | "default"
    | "link"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  type?: "submit" | "reset" | "button" | undefined;
}[];
