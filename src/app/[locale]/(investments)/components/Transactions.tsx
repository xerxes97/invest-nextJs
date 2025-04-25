import { formatNumber } from "@/utils/number";
import { getAmountColor } from "@/utils/common";
import { useTranslations } from "next-intl";
import { formatDate } from "@/utils/date";
import { ITransactionGroup, ITransactionModel } from "@/models";

export const TransactionGroup = (props: ITransactionGroup) => {
  const { transactions } = props;

  if (!transactions?.length) return null;

  return (
    <div>
      {transactions?.map((item) => {
        return <Transaction key={item.id} transaction={item} />;
      })}
      <div
        className={`mb-2 border rounded-lg space-x-4 px-4 py-2 flex justify-around`}
      >
        {/* {Object.keys(totalValues).map((key) => {
          const value = totalValues[key];
          return (
            <React.Fragment key={key}>
              <p>
                <span className="text-sm font-medium">{key} </span>
                <span className={`font-medium ${getAmountColor(value)}`}>
                  $ {formatNumber(value)}
                </span>
              </p>
            </React.Fragment>
          );
        })} */}
        <p>
          <span className="text-sm font-medium">{"balance"} </span>
          {/* <span
              className={`font-medium ${getAmountColor(
                calcTotals(transactions)[key]
              )}`}
            >
              $ {formatNumber(calcTotals(transactions)[key])}
            </span> */}
        </p>
      </div>
    </div>
  );
};

const Transaction = ({ transaction }: { transaction: ITransactionModel }) => {
  const t = useTranslations();

  return (
    <div className="mb-2 border rounded-lg space-x-4 px-4 py-2 grid grid-cols-3">
      <p>
        <span className="text-sm font-medium">{t("piggy.amount")} </span>
        <span className={`font-medium ${getAmountColor(transaction.amount)}`}>
          $ {formatNumber(Number(transaction.amount))}
        </span>
      </p>
      <p>
        <span className="text-sm font-medium">{t("common.date")}</span>:{" "}
        {formatDate(transaction.date)}
      </p>
      <p>
        <span className="text-sm font-medium">{t("piggy.type")}</span>:{" "}
        {transaction.description}
      </p>
    </div>
  );
};

export default TransactionGroup;
