import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { FormControl } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useTranslations } from "next-intl";

export interface ISelectField {
  field: ControllerRenderProps<FieldValues, string>;
  placeholder?: string;
  options?: ISelectOption[];
}

export interface ISelectOption {
  value: string;
  label: string;
}

export const AppSelect = (props: ISelectField) => {
  const { field, placeholder = "", options } = props;
  const t = useTranslations();
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
      <FormControl>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {options ? (
          options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))
        ) : (
          <SelectItem value={"noOptions"} disabled>
            {t("common.noOptions")}
          </SelectItem>
        )}
      </SelectContent>
    </Select>
  );
};

export default AppSelect;
