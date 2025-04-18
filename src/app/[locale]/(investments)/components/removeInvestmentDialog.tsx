"use client";

import { AppDialog } from "@/components/common";
import { usePageContext } from "../context";

export const RemoveInvestmentDialog = () => {
  const { removeInvestmentDialogOpen } = usePageContext();

  return <AppDialog open={removeInvestmentDialogOpen} />;
};

export default RemoveInvestmentDialog;
