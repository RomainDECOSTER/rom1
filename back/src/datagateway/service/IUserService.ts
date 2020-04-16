import IServiceBase from "./IServiceBase";
import IUserModel from "../model/IUserModel";

interface IUserService extends IServiceBase<IUserModel> {
  findByUsername(username: string): Promise<IUserModel>;
  findByEmail(email: string): Promise<IUserModel>;
  findByUsernameOrEmail(value: string): Promise<IUserModel>;
}

export default IUserService;
