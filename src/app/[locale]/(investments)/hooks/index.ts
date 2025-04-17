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

  const newTransaction = async (body: IControlInvestmentModel): Promise<void> => {
    // body.amount = Number(body.amount);
    // body.period_goal = Number(body.period_goal);
    // body.end_goal = Number(body.end_goal);
    // body.period = "DAILY";
    // body.user = 1;
    // await Investment.create(body, `?userId=${1}`);
    // router.refresh();
    closeNewInvestmentModal();
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
    await Investment.create(body, `?userId=${1}`);
    refresh();
    closeNewInvestmentModal();
  };

  const removeInvestment = async (id: number): Promise<void> => {
    await Investment.remove(id);
    refresh();
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
      openNewInvestmentModal,
      closeNewInvestmentModal,
      saveNewInvestment,
      removeInvestment,
      newTransaction
    },
  };
};

export default useApp;
