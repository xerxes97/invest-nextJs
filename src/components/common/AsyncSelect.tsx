"use client";

import { useEffect, useState } from "react";
import AppSelect, { ISelectField, ISelectOption } from "./Select";
import Orm from "@/services/client/orm";
import { IEndpointNames } from "@/services/client/interfaces";
import { useTranslations } from "next-intl";

export type IAsyncSelectProps = Omit<ISelectField, "options"> & {
  resource: IEndpointNames;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formatOptions?: (options: any[]) => ISelectOption[];
};

class GenericOrm<T> extends Orm<T> {
  constructor(endpointName: IEndpointNames) {
    super({ endpointName });
  }
}

export const AppAsyncSelect = (props: IAsyncSelectProps) => {
  const { field, placeholder = "", resource, formatOptions } = props;
  const [options, setOptions] = useState<ISelectOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations("common");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const resourceQuery = new GenericOrm<any>(resource);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const { rows } = await resourceQuery.find({});
      const values = formatOptions ? formatOptions(rows) : rows;
      console.log(values);
      setOptions(values);
      setIsLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resource]);

  return (
    <AppSelect
      field={field}
      placeholder={isLoading ? t("loading") : placeholder}
      options={options}
    />
  );
};
