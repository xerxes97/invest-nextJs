import { IInvestmentDTO } from "@/models/investments";

export interface IpageInitialState {
    newInvestmentModalOpen: boolean;
}

export interface IpageInitialContext extends IpageInitialState {
  events: {
    openNewInvestmentModal: () => void;
    closeNewInvestmentModal: () => void;
    saveNewInvestment: (data: IInvestmentDTO) => Promise<void>;
  };
}
