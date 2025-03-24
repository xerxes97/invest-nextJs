"use client";

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export interface IAppSheetProps {
    trigger: string | React.ReactNode;
    title: string | React.ReactNode;
    description?: string | React.ReactNode;
    content: React.ReactNode;
    footer?: React.ReactNode;
}

export const AppSheet = (props: IAppSheetProps) => {
    const {trigger, title, description, content, footer} = props;
    return (
      <Sheet>
        <SheetTrigger asChild>
            {typeof trigger === "string" ? <Button>{trigger}</Button> : trigger}
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
            {description && <SheetDescription>
              {description}
            </SheetDescription>}
          </SheetHeader>
        {content}
          <SheetFooter>
            <SheetClose asChild>
              {footer || <Button type="submit">Save changes</Button>}
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    )
};

export default AppSheet;


