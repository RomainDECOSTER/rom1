import Axios from 'axios';
export const AxiosInstance = Axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});
