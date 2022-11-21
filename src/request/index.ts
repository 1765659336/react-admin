import axios from "axios";
import { message } from "antd";

const request = axios.create({
  timeout: 5000,
});

request.interceptors.request.use(
  (config: any) => {
    config.headers.Authorization = "Basic";
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response: any) => {
    const {
      data: { status, content: content },
    } = response;
    !status && message.error(content);
    return response;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default request;
