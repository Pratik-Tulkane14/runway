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