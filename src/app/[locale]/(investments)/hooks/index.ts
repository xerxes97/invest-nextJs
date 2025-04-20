import { useState } from "react";
import {
  IControlInvestmentModel,
  IpageInitialContext,
  IpageInitialState,
} from "../interfaces";
import { pageInitialState } from "../constants/context";
import { IInvestmentDTO } from "@/models/investments";
import { useRouter } from "next/navigation";
import Investment from "@/services/investments";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

export const useApp = (): IpageInitialContext => {
  const [state, setState] = useState<IpageInitialState>(pageInitialState);
  const router = useRouter();
  const refresh = () => router.refresh();
  const t = useTranslations("investments");

  const changeState = async (states: Partial<IpageInitialState>) => {
    setState((prevState) => ({
      ...prevState,
      ...states,
    }));
  };

  // Transactions

  const newTransaction = async (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    body: IControlInvestmentModel
  ): Promise<void> => {
    refresh();
    closeNewInvestmentModal();
  };

  const openNewInvestmentTransactionModal = (data: IControlInvestmentModel) => {
    changeState({
      newInvestmentTransactionModalOpen: true,
      investmentInfo: data,
    });
  };

  const closeNewInvestmentTransactionModal = () => {
    changeState({
      newInvestmentTransactionModalOpen: false,
      investmentInfo: undefined,
    });
  };

  // ==========================================================

  // Investments
  // New investment control section

  const saveNewInvestment = async (body: IInvestmentDTO): Promise<void> => {
    body.amount = Number(body.amount);
    body.period_goal = Number(body.period_goal);
    body.end_goal = Number(body.end_goal);
    body.period = "DAILY";
    body.user = 1;
    const createInvestment = Investment.create(body, `?userId=${1}`);
    toast.promise(createInvestment, {
      loading: t("newCreating"),
      success: t("newSuccess"),
      error: t("newError"),
    });
    refresh();
    closeNewInvestmentModal();
  };

  const removeInvestment = async (): Promise<void> => {
    const investmentId = state.investmentInfo?.id;
    if (investmentId) {
      const removeInvestment = Investment.remove(investmentId);
      toast.promise(removeInvestment, {
        loading: t("removeLoading"),
        success: t("removeSuccess"),
        error: t("removeError"),
      });
      refresh();
    }
    closeRemoveInvestmentDialog();
  };

  const openRemoveInvestmentDialog = async (
    data: IControlInvestmentModel
  ): Promise<void> => {
    changeState({ removeInvestmentDialogOpen: true, investmentInfo: data });
  };

  const closeRemoveInvestmentDialog = (): void => {
    changeState({
      removeInvestmentDialogOpen: false,
      investmentInfo: undefined,
    });
  };

  const openNewInvestmentModal = () => {
    changeState({ newInvestmentModalOpen: true });
  };

  const closeNewInvestmentModal = () => {
    changeState({ newInvestmentModalOpen: false });
  };

  // ==========================================================

  return {
    ...state,
    events: {
      openNewInvestmentTransactionModal,
      closeNewInvestmentTransactionModal,
      newTransaction,
      // ==========================================================
      openNewInvestmentModal,
      closeNewInvestmentModal,
      openRemoveInvestmentDialog,
      closeRemoveInvestmentDialog,
      removeInvestment,
      saveNewInvestment,
    },
  };
};

export default useApp;
