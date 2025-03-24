import { AppCollapsible, Fund } from "@/components/custom";
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
      {investments.map((item: IInvestmentModel) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { transactions, ...rest } = item;
        return (
          <AppCollapsible
            key={item.id}
            header={<Fund {...rest} />}
            content={<div>{item.description}</div>}
            // header={<Fund {...rest} />}
            // content={<TransactionGroup transactions={transactions} />}
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
