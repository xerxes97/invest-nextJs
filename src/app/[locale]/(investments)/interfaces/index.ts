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
    // ==========================================================
    openNewInvestmentModal: () => void;
    closeNewInvestmentModal: () => void;
    saveNewInvestment: (data: IInvestmentDTO) => Promise<void>;
    newTransaction: (data: IControlInvestmentModel) => Promise<void>;
    openRemoveInvestmentDialog: (data: IControlInvestmentModel) => Promise<void>;
    closeRemoveInvestmentDialog: () => void;
  };
}
