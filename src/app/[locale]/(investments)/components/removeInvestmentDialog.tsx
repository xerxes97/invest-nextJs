"use client";

import { AppDialog } from "@/components/common";
import { usePageContext } from "../context";
import { useTranslations } from "next-intl";

export const RemoveInvestmentDialog = () => {
  const {
    removeInvestmentDialogOpen,
    investmentInfo,
    events: { closeRemoveInvestmentDialog: onClose },
  } = usePageContext();

  const t = useTranslations("investments");

  const title = t("remove", { investment: investmentInfo?.name ?? "" });
  const content = t("removeConfirm", {
    investment: investmentInfo?.name ?? "",
  });

  return (
    <AppDialog
      open={removeInvestmentDialogOpen}
      onClose={onClose}
      title={title}
      content={content}
    />
  );
};

export default RemoveInvestmentDialog;
