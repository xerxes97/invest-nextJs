"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { AppICollapsible } from "../interfaces/components";

export const AppCollapsible = (props: AppICollapsible) => {
  const { header, content, icon, tools } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="space-y-2 mb-5"
    >
      <div className="border rounded-lg flex items-center justify-between space-x-4 px-4 py-2">
  {header}
        <div>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              {icon || <ChevronsUpDown className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
          {tools}
        </div>
      </div>
      <CollapsibleContent className="CollapsibleContent space-x-4 px-4 space-y-2">
        {content}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default AppCollapsible;
