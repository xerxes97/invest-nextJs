"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import AppForm, { IAppFormFieldProps } from "./Form";
import { useTranslations } from "next-intl";

type IAsFormProps =
  | {
      asForm: true;
      fields: IAppFormFieldProps[];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onSubmit: (data?: any) => Promise<void>;
    }
  | { asForm?: false; fields?: null };

export type IAppSheetProps = IAsFormProps & {
  trigger: IAppSheet;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  content?: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
};

export interface IAppSheet {
  label: string;
  onClick: () => void;
}

export const AppSheet = (props: IAppSheetProps) => {
  const {
    trigger,
    title,
    description,
    content,
    asForm = false,
    fields,
    open,
    onClose,
  } = props;
  const t = useTranslations("common");

  return (
    <Sheet open={open}>
      <SheetTrigger asChild>
        {<Button onClick={trigger.onClick}>{trigger.label}</Button>}
      </SheetTrigger>
      <SheetContent onClose={onClose}>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          {description && <SheetDescription>{description}</SheetDescription>}
        </SheetHeader>
        {asForm && fields ? (
          <AppSheetForm fields={fields} onSubmit={props.onSubmit} />
        ) : (
          <>
            {content}
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">{t("save")}</Button>
              </SheetClose>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

const AppSheetForm = ({
  fields,
  onSubmit,
}: {
  fields: IAppFormFieldProps[];
  onSubmit: (data?: unknown) => Promise<void>;
}) => {
  const t = useTranslations("common");

  return (
    <AppForm
      fields={fields}
      onSubmit={onSubmit}
      tools={
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">{t("save")}</Button>
          </SheetClose>
        </SheetFooter>
      }
    />
  );
};

export default AppSheet;
