import { AppCollapsible } from "@/components/common";
import TransactionGroup from "./Transactions";
import Fund from "./Fund";
import { IInvestmentModel } from "@/components/interfaces/models";

export const InvestmentList = ({
  investments,
}: {
  investments: IInvestmentModel[];
}) => {
  return (
    <>
      {investments.map((item: IInvestmentModel) => {
        const { transactions, ...rest } = item;
        return (
          <AppCollapsible
            key={item.id}
            header={<Fund {...rest} />}
            content={<TransactionGroup transactions={transactions} />}
            // tools={
            //   <Control
            //     newTransaction={() => transactionSheetSetOpen(rest)}
            //     removeInvestment={() => removeInvestment(rest.id)}
            //   />
            // }
          />
        );
      })}
    </>
  );
};

export default InvestmentList;
