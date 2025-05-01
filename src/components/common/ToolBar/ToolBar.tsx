import { ToolBarOpcContainer } from "./components";

export const AppToolBar = () => {
  return (
    <div className="h-12 mt-2">
      <div className="border border-[var(--sidebar-border)] shadow-sm flex items-center justify-end bg-[var(--sidebar)] rounded-lg mr-2 h-full">
        <ToolBarOpcContainer />
      </div>
    </div>
  );
};

export default AppToolBar;
