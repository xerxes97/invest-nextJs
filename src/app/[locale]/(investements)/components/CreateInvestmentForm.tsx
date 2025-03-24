import { AppSheet } from "@/components/common";
import { useTranslations } from "next-intl";

export const CreateInvestmentForm = () => {
  const t = useTranslations("investments");

  return (
    <AppSheet
      trigger={t("new")}
      title={t("new")}
      content={<p>{t("description")}</p>}
    />
  );
};

export default CreateInvestmentForm;
