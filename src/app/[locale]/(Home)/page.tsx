import { AppCollapsible } from "@/components/custom";
import { IInvestmentModel } from "@/components/interfaces/models";

async function getData() {
  const res = await fetch(`${process.env.API_URL}investments?userId=1`);
  if (!res.ok) throw new Error("Error getting data");
  return res.json();
}

export default async function Home() {
  const investments = await getData();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {investments.map((item: IInvestmentModel) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { transactions, ...rest } = item;
          return (
            <AppCollapsible
              key={item.id}
              header={<div>{item.name}</div>}
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
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer> */}
    </div>
  );
}
