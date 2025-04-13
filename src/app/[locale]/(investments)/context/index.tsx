"use client";

import { createContext, useContext } from "react";
import { IpageInitialContext } from "../interfaces";
import { pageInitialContext } from "../constants/context";
import useApp from "../hooks";

export const PageContext = createContext<IpageInitialContext>(pageInitialContext);

export const PageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const value = useApp();
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>; 
};

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error("PageCartContext must be used within a PageCartProvider");
  }
  return context;
};
