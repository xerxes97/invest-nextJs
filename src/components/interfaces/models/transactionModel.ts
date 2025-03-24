export interface ITransactionModel {
    id: number;
    type_id: number;
    date: string;
    description: string;
    amount: number;
    investmentId: number;
    typeId: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
  }
  
  export interface ITransactionCreateDTO {
    typeId: number;
    type_id?: number;
    description: string;
    amount: number;
    investmentId: number;
    date?: string;
  }

  export interface ITransactionGroup {
    transactions?: ITransactionModel[];
  }
  