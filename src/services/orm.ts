/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiRequest } from "./client";
import type {
  IGeneral,
  IORM,
  IOrmConstructor,
} from "./interfaces";

export class Orm implements IORM {
  rows: any;
  method: string;
  endpointName: string;

  constructor(props: IOrmConstructor) {
    this.method = "";
    this.endpointName = props.endpointName;
  }

  /**
   * filter the objects
   * @param filter array props filter
   * @returns object
   */
  async find(filter: object) {
    this.method = "find";
    const props: IGeneral = {
      filter,
    };
    const rows = await apiRequest({ ...props, url: this.endpointName });
    const total = rows.length;
    const val = total > 0;

    this.rows = rows;

    return {
      val,
      valMsg: val ? "OK" : "NO DATA",
      total,
      rows,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findOne(id: number) {
    this.method = "findOne";
    const response = await apiRequest({
      //   filter: { id },
      url: this.endpointName,
    });

    this.rows = response;
    const val = !!response[0];
    const rows = response[0] ?? {};

    return {
      val,
      valMsg: val ? "OK" : "NO DATA",
      total: val ? 1 : 0,
      rows,
    };
  }

  async create(props: any, route?: string) {
    const resp = await apiRequest({
      url: route ? `${this.endpointName}/${route}` : this.endpointName,
      method: "POST",
      data: JSON.stringify(props),
    });

    return resp;
  }

  async update(id: number | string, props: any) {
    const resp = await apiRequest({
      url: `${this.endpointName}/${id}`,
      method: "PUT",
      data: JSON.stringify({ ...props }),
    });

    return resp;
  }

  async remove(id: number | string) {
    try {
      const resp = await apiRequest({
        url: `${this.endpointName}/${id}`,
        method: "DELETE",
      });

      return resp;
    } catch (e: any) {
      throw new Error(e);
    }
  }
}

export default Orm;
