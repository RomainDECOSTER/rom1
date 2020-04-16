import { Model } from "mongoose";
import RepositoryBase from "./RepositoryBase";
import IUserRepository from "./IUserRepository";
import IUserModel from "../model/IUserModel";
import UserSchema from "../schema/UserSchema";

class UserRepository extends RepositoryBase<IUserModel> implements IUserRepository {
  private _dbContext: Model<IUserModel>;
  constructor();
  constructor(dbContext: Model<IUserModel> = UserSchema) {
    super(dbContext);
    this._dbContext = dbContext;
  }

  findByUsername(username: string): Promise<IUserModel> {
    return this._dbContext.findOne({ username }).exec();
  }
  findByEmail(email: string): Promise<IUserModel> {
    return this._dbContext.findOne({ email }).exec();
  }
  findByUsernameOrEmail(value: string): Promise<IUserModel> {
    return this._dbContext.findOne({ $or: [{ username: value }, { email: value }] }).exec();
  }
}

Object.seal(UserRepository);

export default UserRepository;
