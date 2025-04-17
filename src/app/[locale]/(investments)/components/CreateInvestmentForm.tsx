"use client";

import { lazy } from "react";
import { useTranslations } from "next-intl";
import { CreateInvestmentFieldsList } from "../constants";
import { usePageContext } from "../context";

const AppSheet = lazy(() => import("@/components/common/Sheet"));

export const CreateInvestmentForm = () => {
  const t = useTranslations("investments");
  const {
    newInvestmentModalOpen,
    events: {
      saveNewInvestment,
      openNewInvestmentModal: onClick,
      closeNewInvestmentModal: onClose,
    },
  } = usePageContext();

  return (
    <AppSheet
      trigger={{ label: t("new"), onClick }}
      title={t("new")}
      asForm={true}
      fields={CreateInvestmentFieldsList}
      onSubmit={saveNewInvestment}
      open={newInvestmentModalOpen}
      onClose={onClose}
    />
  );
};

export default CreateInvestmentForm;
