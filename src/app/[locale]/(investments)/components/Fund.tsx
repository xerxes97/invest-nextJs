import { getAmountColor } from "@/utils/common";
import { useTranslations } from "next-intl";
import { formatNumber } from "@/utils/number";
import { IInvestmentModel } from "@/models";

export const Fund = (props: IInvestmentModel) => {
  const t = useTranslations();

  return (
    <div className="w-full">
      <div className="grid grid-cols-3">
        <p className="text-sm font-medium">{props.name}</p>
        <p>
          <span className="text-sm font-medium">
            {t("piggy.balance")}
          </span>
          <span>: </span>
          <span className={`font-medium ${getAmountColor(props.amount)}`}>
            $ {formatNumber(props.amount)}
          </span>
        </p>
        <p>
          <span className="text-sm font-medium">{t("common.period")}</span>:{" "}
          {props.period}
        </p>
      </div>
      <p className="text-sm font-medium mt-2">{t("common.description")}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default Fund;
