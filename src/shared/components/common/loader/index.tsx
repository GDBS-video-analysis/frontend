import { ILoading } from "@shared/interfaces/helper-interfaces";
import { ReactNode } from "react";

interface ILoaderProps extends ILoading {
  children: ReactNode;
}

export const Loader = ({ isLoading, children }: ILoaderProps) => {
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  return <>{children}</>;
};
