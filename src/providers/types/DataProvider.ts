import { AxiosResponse } from "axios"

export type DataService<T = any> = {
  getList: (resource: string) => Promise<AxiosResponse<T[], T>>;
  getOne: (resource: string, id: number) => Promise<AxiosResponse<T, T>>;
  deleteOne: (resource: string, id: number) => Promise<AxiosResponse<T, T>>;
  save: (resource: string, props: T) => Promise<AxiosResponse<T, T>>;
  update: (resource: string, id: number, props: T) => Promise<AxiosResponse<T, T>>;
}
