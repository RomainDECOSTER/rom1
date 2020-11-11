import Axios from 'axios';
export const AxiosInstance = Axios.create({
  baseURL: `https://api.rom2.lacle.ovh/api`,
});
