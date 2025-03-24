import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

import { IButtonVariants } from "@/components/ui/button";

export interface IAppButtonProps
  extends IButtonVariants,
    React.ComponentProps<"button"> {
  label: string;
  context?: string;
  icon?: React.ReactNode;
}

export const AppButton = (props: IAppButtonProps) => {
  const { context, className, ...rest } = props;
  const concatClasses = cn("cursor-pointer", className);
  if (context) {
    return <TranslatedButton {...props} className={concatClasses} />;
  } else {
    return <NoTranslatedButton {...rest} className={concatClasses} />;
  }
};

const TranslatedButton = (props: IAppButtonProps) => {
  const { context, label, ...rest } = props;
  const t = useTranslations(context);
  return <Button {...rest}>{t(label)}</Button>;
};

const NoTranslatedButton = (props: IAppButtonProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { label, icon, ...rest } = props;
  return <Button {...rest}>{label}</Button>;
};

export default AppButton;
