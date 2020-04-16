import IUserRespository from "../repository/IUserRepository";
import UserRepository from "../repository/UserRepository";
import IUserModel from "../model/IUserModel";
import IUserService from "./IUserService";

import ServiceBase from "./ServiceBase";

class UserService extends ServiceBase<IUserModel> implements IUserService {
  private _userRepo: IUserRespository;

  constructor();
  constructor(userRepor: IUserRespository = new UserRepository()) {
    super(userRepor);
    this._userRepo = userRepor;
  }

  findByUsername(username: string): Promise<IUserModel> {
    return this._userRepo.findByUsername(username);
  }
  findByEmail(email: string): Promise<IUserModel> {
    return this._userRepo.findByEmail(email);
  }
  findByUsernameOrEmail(value: string): Promise<IUserModel> {
    return this._userRepo.findByUsernameOrEmail(value);
  }
}
Object.seal(UserService);
export default UserService;
