import Axios from "axios";
export const AxiosInstance = Axios.create({
  baseURL: "http://localhost:8080/api/",
});
