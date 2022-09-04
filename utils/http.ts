import Axios, { AxiosRequestConfig } from "axios";
const baseURL = "http://localhost:9999";
const app = Axios.create({
  baseURL,
});

export default {
  get<T>(url: string, config?: AxiosRequestConfig<T>) {
    return app.get(url, config);
  },
  post<T>(url: string, data?: T, config?: AxiosRequestConfig) {
    return app.post(url, data, config);
  },
};
