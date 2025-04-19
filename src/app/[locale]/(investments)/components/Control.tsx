"use client";

import { Button } from "@/components/ui/button";
import { CircleFadingPlusIcon, Trash2 } from "lucide-react";
import { IControlInvestmentModel } from "../interfaces";
import { usePageContext } from "../context";

export const Control = (props: IControlInvestmentModel) => {
  const {
    events: {
      openNewInvestmentTransactionModal: newTrans,
      openRemoveInvestmentDialog,
    },
  } = usePageContext();

  const newTransaction = () => newTrans(props);

  const removeInvestmentRequest = () => openRemoveInvestmentDialog(props);

  return (
    <div className="w-10">
      <Button variant="ghost" size="sm" onClick={newTransaction}>
        <CircleFadingPlusIcon className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm" onClick={removeInvestmentRequest}>
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Control;
