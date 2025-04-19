import { InvestmentList } from "./(investments)/components";
import { IInvestmentModel } from "@/models/investments";
import { PageProvider } from "./(investments)/context";
import { locales } from "@/i18n/routing";
import { lazy } from "react";

const CreateInvestmentForm = lazy(
  () => import("./(investments)/components/CreateInvestmentForm")
);
const CreateInvestmentTransactionForm = lazy(
  () => import("./(investments)/components/CreateInvestmentTransactionForm")
);
const RemoveInvestmentDialog = lazy(
  () => import("./(investments)/components/removeInvestmentDialog")
);

const getData = async (): Promise<IInvestmentModel[]> => {
  const res = await fetch(`${process.env.API_URL}investments?userId=1`);
  // const res = await Promise.resolve({ok: true, json: () => []});
  if (!res.ok) throw new Error("Error getting data");
  return res.json();
};

export function generateStaticParams() {
  console.log("⚡ Generando rutas para:", locales);
  return locales.map((locale) => ({ locale }));
}

export default async function Home() {
  const investments = await getData();

  return (
    <PageProvider>
      <RemoveInvestmentDialog />
      <CreateInvestmentForm />
      <CreateInvestmentTransactionForm />
      <InvestmentList investments={investments} />
    </PageProvider>
  );
}
