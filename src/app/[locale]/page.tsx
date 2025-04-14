import { CreateInvestmentForm, InvestmentList } from "./(investments)/components";
import { IInvestmentModel } from "@/components/interfaces/models";
import { PageProvider } from "./(investments)/context";

const getData = async (): Promise<IInvestmentModel[]> => {
  const res = await fetch(`${process.env.API_URL}investments?userId=1`);
  if (!res.ok) throw new Error("Error getting data");
  return res.json();
};

export function generateStaticParams() {
  const locales = ["en", "es", "fr"];
  console.log("⚡ Generando rutas para:", locales);
  return locales.map((locale) => ({ locale }));
}

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
