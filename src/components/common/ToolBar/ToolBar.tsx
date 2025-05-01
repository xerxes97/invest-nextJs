"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import { ToolBarOpcContainer } from "./components";

export const AppToolBar = () => {
  const isMobile = useIsMobile();
  const classScreen = isMobile ? "mx-2" : " mr-2";
  return (
    <div className="h-12 mt-2">
      <div
        className={`border border-[var(--sidebar-border)] shadow-sm flex items-center justify-end bg-[var(--sidebar)] rounded-lg h-full ${classScreen}`}
      >
        <ToolBarOpcContainer />
      </div>
    </div>
  );
};

export default AppToolBar;
