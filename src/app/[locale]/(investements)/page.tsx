import { CreateInvestmentForm, InvestmentList } from "./components";
import { IInvestmentModel } from "@/components/interfaces/models";
import { PageProvider } from "./context";

const getData = async (): Promise<IInvestmentModel[]> => {
  const res = await fetch(`${process.env.API_URL}investments?userId=1`);
  if (!res.ok) throw new Error("Error getting data");
  return res.json();
};

export default async function Home() {
  const investments = await getData();

  return (
    <PageProvider>
      <>
        <CreateInvestmentForm />
        <InvestmentList investments={investments} />
      </>
    </PageProvider>
  );
}
