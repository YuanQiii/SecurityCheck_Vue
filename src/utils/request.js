import axios from "axios";

axios.defaults.headers.post['content-Type'] = 'application/json';

//1 创建axios baseURL 超时时间
const service = axios.create({
  // baseURL: "http://www.qcpjfwcx.com:8099/api/index/",
  baseURL: "http://127.0.0.1:8000/api/index/",
  timeout: 10000,
  // withCredentials: true,
});
//2 请求
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    //捕获错误信息
    return Promise.reject(error);
  }
);
//3 响应
service.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject(error); //对数据进一步处理
  }
);
//4 抛出
export default service;