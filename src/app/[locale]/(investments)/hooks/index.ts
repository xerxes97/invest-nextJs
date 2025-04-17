import { useState } from "react";
import { IpageInitialContext, IpageInitialState } from "../interfaces";
import { pageInitialState } from "../constants/context";
import { IInvestmentDTO } from "@/models/investments";
import { useRouter } from "next/navigation";
import Investment from "@/services/investments";

export const useApp = (): IpageInitialContext => {
  const [state, setState] = useState<IpageInitialState>(pageInitialState);
  const router = useRouter();

  // New investment control section

  const saveNewInvestment = async (body: IInvestmentDTO): Promise<void> => {
    body.amount = Number(body.amount);
    body.period_goal = Number(body.period_goal);
    body.end_goal = Number(body.end_goal);
    body.period = "DAILY";
    body.user = 1;
    await Investment.create(body, `?userId=${1}`);
    router.refresh();
    closeNewInvestmentModal();
  };

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
    },
  };
};

export default useApp;
