import { CreateInvestmentForm, InvestmentList } from "./components";
import { IInvestmentModel } from "@/components/interfaces/models";

const getData = async (): Promise<IInvestmentModel[]> => {
  const res = await fetch(`${process.env.API_URL}investments?userId=1`);
  if (!res.ok) throw new Error("Error getting data");
  return res.json();
};

export default async function Home() {
  const investments = await getData();

  return (
    <div>
      <CreateInvestmentForm />
      <InvestmentList investments={investments} />
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer> */}
    </div>
  );
}
