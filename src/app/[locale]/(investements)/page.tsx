import { AppCollapsible, AppButton } from "@/components/common";
import { Fund, TransactionGroup } from "./components";
import { IInvestmentModel } from "@/components/interfaces/models";

async function getData() {
  const res = await fetch(`${process.env.API_URL}investments?userId=1`);
  if (!res.ok) throw new Error("Error getting data");
  return res.json();
}

export default async function Home() {
  const investments = await getData();

  return (
    <div>
      <AppButton context="investments" label="new" variant="default" />
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
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer> */}
    </div>
  );
}
