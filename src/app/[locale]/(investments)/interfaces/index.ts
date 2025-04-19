import { IInvestmentDTO, IInvestmentModel } from "@/models/investments";

export interface IpageInitialState {
  newInvestmentModalOpen: boolean;
  removeInvestmentDialogOpen: boolean;
  // ==========================================================
  newInvestmentTransactionModalOpen: boolean;
  investmentInfo?: IControlInvestmentModel;
}

export type IControlInvestmentModel = Pick<IInvestmentModel, "id" | "name">;

export interface IpageInitialContext extends IpageInitialState {
  events: {
    openNewInvestmentTransactionModal: (data: IControlInvestmentModel) => void;
    closeNewInvestmentTransactionModal: () => void;
    newTransaction: (data: IControlInvestmentModel) => Promise<void>;
    // ==========================================================
    openNewInvestmentModal: () => void;
    closeNewInvestmentModal: () => void;
    openRemoveInvestmentDialog: (data: IControlInvestmentModel) => Promise<void>;
    closeRemoveInvestmentDialog: () => void;
    removeInvestment: () => Promise<void>;
    saveNewInvestment: (data: IInvestmentDTO) => Promise<void>;
  };
}
