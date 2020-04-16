import IRepositoryBase from "./IRepositoryBase";
import IUserModel from "../model/IUserModel";

interface IUserRepository extends IRepositoryBase<IUserModel> {
  findByUsername(username: string): Promise<IUserModel>;
  findByEmail(email: string): Promise<IUserModel>;
  findByUsernameOrEmail(value: string): Promise<IUserModel>;
}

export default IUserRepository;
