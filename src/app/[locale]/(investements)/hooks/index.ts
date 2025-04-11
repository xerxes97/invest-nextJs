import { useState } from "react";
import { IpageInitialContext, IpageInitialState } from "../interfaces";
import { pageInitialState } from "../constants/context";

export const useApp = (): IpageInitialContext => {
  const [state, setState] = useState<IpageInitialState>(pageInitialState);

  const openNewInvestmentModal = () => {
    setState({ ...state, newInvestmentModalOpen: true });
  }

  const closeNewInvestmentModal = () => {
    setState({ ...state, newInvestmentModalOpen: false });
  }

  return {
    ...state,
    events: {
      openNewInvestmentModal,
      closeNewInvestmentModal,
    },
  };
};

export default useApp;
