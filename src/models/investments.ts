import { IGeneralModelProps } from "./general";
import { ITransactionModel } from "./transactions";

export interface IInvestmentDTO {
  id: number;
  name: string;
  description: string;
  platform: string;
  amount: number;
  period_goal: number;
  period: string;
  end_goal: number;
  user: number;
  transactions?: ITransactionModel[];
}

export type IInvestmentModel = IInvestmentDTO & IGeneralModelProps;
