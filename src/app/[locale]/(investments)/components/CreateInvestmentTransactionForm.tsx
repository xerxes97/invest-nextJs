"use client";

import { lazy } from "react";
import { useTranslations } from "next-intl";
import { CreateInvestmentFieldsList } from "../constants";
import { usePageContext } from "../context";

const AppSheet = lazy(() => import("@/components/common/Sheet"));

export const CreateInvestmentTransactionForm = () => {
  const t = useTranslations("investments");
  const {
    newInvestmentTransactionModalOpen,
    events: {
      closeNewInvestmentTransactionModal: onClose,
    },
  } = usePageContext();

  return (
    <AppSheet
      title={t("new")}
      asForm={true}
      fields={CreateInvestmentFieldsList}
      onSubmit={async () => {}}
      open={newInvestmentTransactionModalOpen}
      onClose={onClose}
    />
  );
};

export default CreateInvestmentTransactionForm;
