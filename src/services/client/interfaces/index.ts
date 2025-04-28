/* eslint-disable @typescript-eslint/no-explicit-any */

export type IEndpointNames = "investments" | "transaction-types" | "transactions";

export interface IOrmConstructor {
    endpointName: IEndpointNames;
  }
  
  export interface IResponse {
    val: boolean;
    valMsg: string;
    total: number;
    rows: any;
  }
  
  export interface IORM {
    rows: any;
    method: string;
    endpointName: string;
    find: (filter: object) => Promise<IResponse>;
    findOne: (id: number) => Promise<IResponse>;
    create: (props: any, route?: string) => Promise<IResponse>;
    update: (id: number | string, props: any) => Promise<IResponse>;
    remove: (id: number | string) => Promise<IResponse>;
  }
  
  export interface IGeneral {
    filter?: unknown;
    varsion?: string;
    endPoint?: string;
    dashboardId?: number;
  }
  