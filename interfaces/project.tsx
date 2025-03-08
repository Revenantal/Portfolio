import React from "react";

export default interface ProjectInterface {
  key: string,
  slug: string,
  title: string,
  links?: Links[],
  url?: string,
  intro?: string,
  content?: string | React.ReactNode,
}

export interface Links {
  key: string,
  url: string,
  label: string,
  target?: string,
}