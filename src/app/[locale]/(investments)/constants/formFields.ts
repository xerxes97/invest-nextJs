import { IAppFormFieldProps } from "@/components/common/Form";

export const CreateInvestmentFieldsList: IAppFormFieldProps[] = [
  { name: "name", label: "Name", type: "text" },
  { name: "description", label: "Description", type: "text" },
  { name: "platform", label: "Platform", type: "text" },
  { name: "amount", label: "Amount", type: "number" },
  { name: "period_goal", label: "Period goal", type: "text" },
  { name: "period", label: "Period", type: "text" },
  { name: "end_goal", label: "End Goal", type: "number" },
];

export const CreateInvestmentTransactionFieldsList: IAppFormFieldProps[] = [
  { name: "typeId", label: "type", type: "select" },
  { name: "amount", label: "Amount", type: "number" },
  { name: "description", label: "Description", type: "text" },
];
