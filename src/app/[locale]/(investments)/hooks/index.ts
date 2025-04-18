import { useState } from "react";
import { IControlInvestmentModel, IpageInitialContext, IpageInitialState } from "../interfaces";
import { pageInitialState } from "../constants/context";
import { IInvestmentDTO } from "@/models/investments";
import { useRouter } from "next/navigation";
import Investment from "@/services/investments";

export const useApp = (): IpageInitialContext => {
  const [state, setState] = useState<IpageInitialState>(pageInitialState);
  const router = useRouter();
  const refresh = () => router.refresh();

  // Transactions

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const newTransaction = async (body: IControlInvestmentModel): Promise<void> => {
    refresh();
    closeNewInvestmentModal();
  };

  const openNewInvestmentTransactionModal = (data: IControlInvestmentModel) => {
    setState({ ...state, newInvestmentTransactionModalOpen: true, controlInvestmentInfo: data });
  }

  const closeNewInvestmentTransactionModal = () => {
    setState({ ...state, newInvestmentTransactionModalOpen: false, controlInvestmentInfo: undefined });
  }

  // ==========================================================

  // Investments
  // New investment control section

  const saveNewInvestment = async (body: IInvestmentDTO): Promise<void> => {
    body.amount = Number(body.amount);
    body.period_goal = Number(body.period_goal);
    body.end_goal = Number(body.end_goal);
    body.period = "DAILY";
    body.user = 1;
    await Investment.create(body, `?userId=${1}`);
    refresh();
    closeNewInvestmentModal();
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const openRemoveInvestmentDialog = async (id: number): Promise<void> => {
    setState({ ...state, removeInvestmentDialogOpen: true });
  }

  const openNewInvestmentModal = () => {
    setState({ ...state, newInvestmentModalOpen: true });
  };

  const closeNewInvestmentModal = () => {
    setState({ ...state, newInvestmentModalOpen: false });
  };

  // ==========================================================

  return {
    ...state,
    events: {
      openNewInvestmentTransactionModal,
      closeNewInvestmentTransactionModal,
      // ==========================================================
      openNewInvestmentModal,
      closeNewInvestmentModal,
      saveNewInvestment,
      openRemoveInvestmentDialog,
      newTransaction
    },
  };
};

export default useApp;
