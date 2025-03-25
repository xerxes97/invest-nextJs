"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodRawShape } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "../ui/form";
import { useActionState } from "react";
import { Input } from "../ui/input";

type FormTypes = "input" | "select";

export interface IAppFormFieldProps {
  name: string;
  type: FormTypes;
  description?: string;
  label?: string;
  placeholder?: string;
}

export interface IAppFormProps {
  fields: IAppFormFieldProps[];
  onSubmit: (formData?: unknown) => Promise<void>;
  tools?: React.ReactNode;
}

export const AppForm = (props: IAppFormProps) => {
  const { fields, onSubmit, tools } = props;
  const { formSchema, defaultValues } = generateFormSchema(fields);
  const formSchemaValues = z.object(formSchema);
  const form = useForm<z.infer<typeof formSchemaValues>>({
    resolver: zodResolver(formSchemaValues),
    defaultValues: defaultValues,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, submitAction, isPending] = useActionState(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (_: unknown, formData: any) => {
      const isValid = await form.trigger();
      if(!isValid) return;
      const data = Object.fromEntries(formData);
      await onSubmit(data);
      return data;
    },
    {}
  );

  return (
    <Form {...form}>
      <form
        action={submitAction}
        className="h-[calc(100%-140px)] overflow-y-auto"
      >
        <div className="px-4 last:mb-9">
          {fields.map(({ name, label, placeholder, description }) => (
            <FormField
              key={name}
              control={form.control}
              name={name}
              render={({ field }) => (
                <FormItem className="mb-4 last:mb-9">
                  <FormLabel>{label}</FormLabel>
                  <FormControl>
                    <Input placeholder={placeholder} {...field} />
                  </FormControl>
                  {description && (
                    <FormDescription>{description}</FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>
        <div className="w-full absolute bottom-0 flex justify-end bg-white h-[70px]">
          {tools}
        </div>
      </form>
    </Form>
  );
};

const generateFormSchema = (
  fields: IAppFormFieldProps[]
): { formSchema: ZodRawShape; defaultValues: { [key: string]: string } } => {
  const formSchema: ZodRawShape = {};
  const defaultValues: { [key: string]: string } = {};
  fields.forEach(({ name, type }) => {
    if (type === "input") {
      formSchema[name] = stringValidator();
      defaultValues[name] = "";
    }
  });
  return { formSchema, defaultValues };
};

const stringValidator = () => z.string().min(2, { message: "Too short" });

export default AppForm;
