"use client";
import {
  Control,
  ControllerRenderProps,
  FieldValues,
  useForm,
  useFormContext,
} from "react-hook-form";
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
import React, { useActionState } from "react";
import { Input } from "../ui/input";
import AppSelect, { ISelectOption } from "./Select";
import { AppAsyncSelect } from "./AsyncSelect";
import { IEndpointNames } from "@/services/client/interfaces";

type FormTypes =
  | "text"
  | "select"
  | "asyncSelect"
  | "autocomplete"
  | "date"
  | "number"
  | "currency";

export interface IAppFormFieldProps {
  name: string;
  type: FormTypes;
  description?: string;
  label?: string;
  placeholder?: string;
  resource?: IEndpointNames;
  options?: ISelectOption[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formatOptions?: (options: any[]) => ISelectOption[];
}

export interface ITextField {
  field: ControllerRenderProps<FieldValues, string>;
  placeholder?: string;
  isNumber?: boolean;
}

export interface IAppFormProps {
  fields: IAppFormFieldProps[];
  onSubmit: (formData?: unknown) => Promise<void>;
  tools?: React.ReactElement<IToolProps>;
}

interface IToolProps {
  isPending: boolean;
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
      if (!isValid) return;
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
          <Fields fields={fields} control={form.control} />
        </div>
        <div className="w-full absolute bottom-0 flex justify-end bg-white h-[70px]">
          {tools && React.cloneElement(tools, { isPending })}
        </div>
      </form>
    </Form>
  );
};

const Fields = ({
  fields,
  control,
}: {
  fields: IAppFormFieldProps[];
  control: Control;
}) => {
  const { watch } = useFormContext();

  const watchedValues = watch();

  console.log(watchedValues);
  return (
    <>
      {fields.map(
        ({
          name,
          label,
          placeholder,
          description,
          type,
          resource,
          options,
          formatOptions,
        }) => (
          <FormField
            key={name}
            control={control}
            name={name}
            render={({ field }) => {
              return (
                <FormItem className="mb-4 last:mb-9">
                  <FormLabel>{label}</FormLabel>
                  {(type === "number" || type === "text") && (
                    <TextField
                      field={field}
                      placeholder={placeholder}
                      isNumber={type === "number"}
                    />
                  )}
                  {type === "select" && (
                    <AppSelect
                      field={field}
                      options={options}
                      placeholder={placeholder}
                    />
                  )}
                  {type === "asyncSelect" && resource && (
                    <AppAsyncSelect
                      field={field}
                      placeholder={placeholder}
                      resource={resource}
                      formatOptions={formatOptions}
                    />
                  )}
                  {description && (
                    <FormDescription>{description}</FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        )
      )}
    </>
  );
};

const generateFormSchema = (
  fields: IAppFormFieldProps[]
): { formSchema: ZodRawShape; defaultValues: { [key: string]: string } } => {
  const formSchema: ZodRawShape = {};
  const defaultValues: { [key: string]: string } = {};
  fields.forEach(({ name, type }) => {
    if (type === "text") {
      formSchema[name] = stringValidator();
    }
    if (type === "number") {
      formSchema[name] = numberValidator();
    }
    defaultValues[name] = "";
  });
  return { formSchema, defaultValues };
};

const stringValidator = () => z.string().min(2, { message: "Too short" });
const numberValidator = () =>
  z
    .string()
    .transform((value) => Number(value))
    .pipe(z.number().min(0, { message: "Too short" }));

const TextField = (props: ITextField) => {
  const { field, placeholder = "", isNumber } = props;
  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (isNumber && !/\d/.test(event.key)) {
      event.preventDefault();
    }
  };
  return (
    <FormControl>
      <Input
        placeholder={placeholder}
        {...field}
        {...(isNumber && { onKeyDown })}
      />
    </FormControl>
  );
};

export default AppForm;
