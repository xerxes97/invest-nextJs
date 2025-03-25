import { IAppFormFieldProps } from "@/components/common/Form";

export const CreateInvestmentFieldsList: IAppFormFieldProps[] = [
  { name: "name", label: "Name", type: "input" },
  { name: "description", label: "Description", type: "input" },
  { name: "platform", label: "Platform", type: "input" },
  { name: "amount", label: "Amount", type: "input" },
  { name: "period_goal", label: "Period goal", type: "input" },
  { name: "period", label: "Period", type: "input" },
  { name: "end_goal", label: "End Goal", type: "input" },
];
