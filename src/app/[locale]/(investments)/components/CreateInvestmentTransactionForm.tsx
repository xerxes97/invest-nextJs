"use client";

import { lazy } from "react";
import { useTranslations } from "next-intl";
import { CreateInvestmentTransactionFieldsList } from "../constants";
import { usePageContext } from "../context";

const AppSheet = lazy(() => import("@/components/common/Sheet"));

export const CreateInvestmentTransactionForm = () => {
  const t = useTranslations("transactions");
  const {
    newInvestmentTransactionModalOpen,
    investmentInfo,
    events: { closeNewInvestmentTransactionModal: onClose, newTransaction },
  } = usePageContext();

  return (
    <AppSheet
      title={t("createTransaction", {
        investment: investmentInfo?.name ?? "",
      })}
      asForm={true}
      fields={CreateInvestmentTransactionFieldsList}
      onSubmit={newTransaction}
      open={newInvestmentTransactionModalOpen}
      onClose={onClose}
    />
  );
};

export default CreateInvestmentTransactionForm;
