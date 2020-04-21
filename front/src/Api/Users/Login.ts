import { LoginDetail } from "../../Types/User/Login";
import Routes from "./Routes";
import { AxiosInstance } from "../../Tools/Axios";

export const LoginRequest = async (userDetails: LoginDetail) => {
  return AxiosInstance.post(Routes.LOGIN, userDetails);
};
