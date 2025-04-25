import { useState } from "react";
import {
  IControlInvestmentModel,
  IpageInitialContext,
  IpageInitialState,
} from "../interfaces";
import { pageInitialState } from "../constants/context";
import { IInvestmentDTO, ITransactionDTO } from "@/models/investments";
import { Investment, Transaction } from "@/services";
import { useTranslations } from "next-intl";
import { fixNumberFormat } from "@/utils/number";
import { useAlert } from "@/hooks/useAlert";

export const useApp = (): IpageInitialContext => {
  const [state, setState] = useState<IpageInitialState>(pageInitialState);
  const { alertPromise } = useAlert();
  const t = useTranslations();

  const changeState = async (states: Partial<IpageInitialState>) => {
    setState((prevState) => ({
      ...prevState,
      ...states,
    }));
  };

  // Transactions

  const newTransaction = async (body: ITransactionDTO): Promise<void> => {
    const investmentId = state.investmentInfo?.id;
    if (!investmentId) return;
    body.amount = fixNumberFormat(body.amount);
    body.investmentId = investmentId;
    const func = Transaction.create(body);
    alertPromise({
      func,
      loading: t("transactions.newLoading"),
      success: t("transactions.newSuccess"),
      error: t("transactions.newError"),
    });
    closeNewInvestmentTransactionModal();
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
    body.amount = fixNumberFormat(body.amount);
    body.period_goal = fixNumberFormat(body.period_goal);
    body.end_goal = fixNumberFormat(body.end_goal);
    body.period = "DAILY";
    body.user = 1;
    const func = Investment.create(body, `?userId=${1}`);
    alertPromise({
      func,
      loading: t("investments.newLoading"),
      success: t("investments.newSuccess"),
      error: t("investments.newError"),
    });
    closeNewInvestmentModal();
  };

  const removeInvestment = async (): Promise<void> => {
    const investmentId = state.investmentInfo?.id;
    if (investmentId) {
      const func = Investment.remove(investmentId);
      alertPromise({
        func,
        loading: t("investments.removeLoading"),
        success: t("investments.removeSuccess"),
        error: t("investments.removeError"),
      });
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
