"use client";

import { AppSheet } from "@/components/common";
import { useTranslations } from "next-intl";
import { CreateInvestmentFieldsList } from "../constants";
// import { IInvestmentModel } from "@/components/interfaces/models";

const saveData = async (body: unknown): Promise<void> => {
  const res = await fetch(`${process.env.API_URL}investments?userId=1`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body: { ...(body as any), user: 1 },
  });
  if (!res.ok) throw new Error("Error getting data");
  // return res.json();
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
