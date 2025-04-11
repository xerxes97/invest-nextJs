export interface IpageInitialState {
    newInvestmentModalOpen: boolean;
}

export interface IpageInitialContext extends IpageInitialState {
  events: {
    openNewInvestmentModal: () => void;
    closeNewInvestmentModal: () => void;
  };
}
