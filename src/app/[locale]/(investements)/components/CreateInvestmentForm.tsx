"use client";

import { lazy } from "react";
import { useTranslations } from "next-intl";
import { CreateInvestmentFieldsList } from "../constants";
import Investment from "@/services/investments";
import { IInvestmentDTO } from "@/models/investments";
const AppSheet = lazy(() => import("@/components/common/Sheet"));

const saveData = async (body: IInvestmentDTO): Promise<void> => {
  body.amount = Number(body.amount);
  body.period_goal = Number(body.period_goal);
  body.end_goal = Number(body.end_goal);
  body.period = "DAILY";
  body.user = 1;
  await Investment.create(body, `?userId=${1}`);
};

export const CreateInvestmentForm = () => {
  const t = useTranslations("investments");

  return (
    <AppSheet
      trigger={t("new")}
      title={t("new")}
      asForm={true}
      fields={CreateInvestmentFieldsList}
      onSubmit={saveData}
    />
  );
};

export default CreateInvestmentForm;
