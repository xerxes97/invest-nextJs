"use client";

import { lazy } from "react";
import { useTranslations } from "next-intl";
import { CreateInvestmentFieldsList } from "../constants";
const AppSheet = lazy(() => import("@/components/common/Sheet"));
// import { IInvestmentModel } from "@/components/interfaces/models";

const saveData = async (body: unknown): Promise<void> => {
  console.log(body);
  const res = await fetch(`${"http://localhost:3002/api/"}investments?userId=1`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body: JSON.stringify({ ...(body as any), user: 1 }),
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
