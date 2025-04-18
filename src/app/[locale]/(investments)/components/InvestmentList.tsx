"use client";

import { AppCollapsible } from "@/components/common";
import TransactionGroup from "./Transactions";
import Fund from "./Fund";
import { IInvestmentModel } from "@/models";
import Control from "./Control";

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
            tools={<Control id={item.id} name={item.name} />}
          />
        );
      })}
    </>
  );
};

export default InvestmentList;
