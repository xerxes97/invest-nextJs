"use client";

import { Button } from "@/components/ui/button";
import { CircleFadingPlusIcon, Trash2 } from "lucide-react";
import { IControlInvestmentModel } from "../interfaces";
import { usePageContext } from "../context";

export const Control = (props: IControlInvestmentModel) => {
  const { id } = props;
  const {
    events: { newTransaction: newTrans, removeInvestment: removeTrans },
  } = usePageContext();

  const newTransaction = () => newTrans(props);

  const removeInvestment = () => removeTrans(id);

  return (
    <div className="w-10">
      <Button variant="ghost" size="sm" onClick={newTransaction}>
        <CircleFadingPlusIcon className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm" onClick={removeInvestment}>
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Control;
