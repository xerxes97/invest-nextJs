"use client";

import { lazy } from "react";
import { useTranslations } from "next-intl";
import { CreateInvestmentFieldsList } from "../constants";
import Investment from "@/services/investments";
import { IInvestmentDTO } from "@/models/investments";
import { usePageContext } from "../context";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const t = useTranslations("investments");
  const {
    newInvestmentModalOpen,
    events: {
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
      onSubmit={async (data: IInvestmentDTO) => {
        await saveData(data);
        router.refresh();
      }}
      open={newInvestmentModalOpen}
      onClose={onClose}
    />
  );
};

export default CreateInvestmentForm;
