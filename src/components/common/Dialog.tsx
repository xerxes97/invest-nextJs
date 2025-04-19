import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";

export interface IAppDialogProps {
  content: React.ReactNode | string;
  open: boolean;
  title: string;
  description?: string;
  trigger?: string;
  onClose?: () => void;
}

export function AppDialog(props: Readonly<IAppDialogProps>) {
  const { open, trigger, onClose, title, description, content } = props;
  const t = useTranslations("common");

  return (
    <Dialog open={open} onOpenChange={onClose}>
      {trigger && (
        <DialogTrigger asChild>
          <Button variant="outline">{trigger}</Button>
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div className="grid gap-4 py-4">{content}</div>
        {onClose && (
          <DialogFooter>
            <Button onClick={onClose}>{t("cancel")}</Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
