import { ReactNode } from "react";

export interface NavItems {
  name: string;
  path: string;
}
export interface items {
  key: string;
  path: string;
}
export interface footerItem {
  product: items[];
  initiatives: items[];
  company: items[];
  "get started": items[];
  connect: items[];
}
export interface cardTypes {
  key?: number;
  imgPath: string;
  heading: string;
  date: string;
  style?: string;
}
export interface buttonProps {
  name: string;
  style: string;
  children?: ReactNode;
}
export interface videoProps {
  source: string;
  style?: string;
  poster?: string;
}
