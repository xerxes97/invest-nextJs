import { Button } from "@/components/ui/button";
import { CircleFadingPlusIcon, Trash2 } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const Control = (props: IInvestmentTools) => {
  export const Control = () => {
//   const { newTransaction, removeInvestment } = props;

  return (
    <div className="w-10">
      {/* <Button variant="ghost" size="sm" onClick={newTransaction}> */}
      <Button variant="ghost" size="sm">
        <CircleFadingPlusIcon className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm">
      {/* <Button variant="ghost" size="sm" onClick={removeInvestment}> */}
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Control;
