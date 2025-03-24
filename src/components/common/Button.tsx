import { useTranslations } from "next-intl";
import { IAppButton } from "../interfaces/components/button";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export const AppButton = (props: IAppButton) => {
  const { context, className, ...rest } = props;
  const concatClasses = cn("cursor-pointer", className);
  if (context) {
    return <TranslatedButton {...props} className={concatClasses} />;
  } else {
    return <NoTranslatedButton {...rest} className={concatClasses} />;
  }
};

const TranslatedButton = (props: IAppButton) => {
  const { context, label, ...rest } = props;
  const t = useTranslations(context);
  return <Button {...rest}>{t(label)}</Button>;
};

const NoTranslatedButton = (props: IAppButton) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { label, icon, ...rest } = props;
  return <Button {...rest}>{label}</Button>;
};

export default AppButton;
