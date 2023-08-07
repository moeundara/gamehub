import axios, { AxiosError, AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

const InstanceAxios = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bdbd5d81f27b470e82d74ee56249d8f5",
  },
});

export default class APIClient<T> {
  constructor(public endpoint: string) {}
  getAll = (config?: AxiosRequestConfig) => {
    return InstanceAxios.get<FetchResponse<T>>(this.endpoint, config).then(
      (res) => res.data
    );
  };

  get = (id: number | string) => {
    return InstanceAxios.get<T>(this.endpoint + "/" + id).then(
      (res) => res.data
    );
  };
}

export { AxiosError, CanceledError };
