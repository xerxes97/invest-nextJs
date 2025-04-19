import { IpageInitialContext, IpageInitialState } from "../interfaces";

export const pageInitialState: IpageInitialState = {
  newInvestmentModalOpen: false,
  newInvestmentTransactionModalOpen: false,
  removeInvestmentDialogOpen: false,
};

export const pageInitialContext: IpageInitialContext = {
  ...pageInitialState,
  events: {
    openNewInvestmentTransactionModal: () => {},
    closeNewInvestmentTransactionModal: () => {},
    openNewInvestmentModal: () => {},
    closeNewInvestmentModal: () => {},
    saveNewInvestment: async () => {},
    removeInvestment: async () => {},
    newTransaction: async () => {},
    openRemoveInvestmentDialog: async () => {},
    closeRemoveInvestmentDialog: () => {},
  },
};
