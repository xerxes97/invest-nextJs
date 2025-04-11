/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IOrmConstructor {
    endpointName: string;
  }
  
  export interface IfindResponse {
    val: boolean;
    valMsg: string;
    total: number;
    rows: any;
  }
  
  export interface IORM {
    rows: any;
    method: string;
    endpointName: string;
    find: (filter: object) => Promise<IfindResponse>;
    findOne: (id: number) => Promise<IfindResponse>;
    create: (props: any, route?: string) => Promise<IfindResponse>;
    update: (id: number | string, props: any) => Promise<IfindResponse>;
    remove: (id: number | string) => Promise<IfindResponse>;
  }
  
  export interface IGeneral {
    filter?: unknown;
    varsion?: string;
    endPoint?: string;
    dashboardId?: number;
  }
  