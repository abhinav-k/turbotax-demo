import * as React from "react";
import { twMerge } from "tailwind-merge";

export interface CenteredContainerProps {
  children?: React.ReactNode;
  classname?: string;
}

const CenteredContainer = ({ children, classname }: CenteredContainerProps) => {
  return <div className={twMerge(`mx-auto`, classname)}>{children}</div>;
};

export default CenteredContainer;
