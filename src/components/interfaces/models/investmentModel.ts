import { ITransactionModel } from "./transactionModel";

export interface IInvestmentModel {
    id: number;
    name: string;
    platform: string;
    description: string;
    amount: number;
    period_goal: number;
    end_goal: number;
    period: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    transactions?: ITransactionModel[];
  }