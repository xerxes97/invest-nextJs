import { IpageInitialContext, IpageInitialState } from "../interfaces";

export const pageInitialState: IpageInitialState = {
  newInvestmentModalOpen: false,
};

export const pageInitialContext: IpageInitialContext = {
  ...pageInitialState,
  events: {
    openNewInvestmentModal: () => {},
    closeNewInvestmentModal: () => {},
    saveNewInvestment: async () => {},
    newTransaction: async () => {},
    removeInvestment: async () => {},
  },
};
