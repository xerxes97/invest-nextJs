import { IGeneralModelProps } from "./general";

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
}

export type IInvestmentModel = IInvestmentDTO & IGeneralModelProps;
