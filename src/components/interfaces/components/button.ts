import { IButtonVariants } from "@/components/ui/button";

export interface IAppButton
  extends IButtonVariants,
    React.ComponentProps<"button"> {
  label: string;
  context?: string;
  icon?: React.ReactNode;
}
