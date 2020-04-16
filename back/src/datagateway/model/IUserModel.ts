import IEntityModel from "./IEntityModel";

interface IUserModel extends IEntityModel {
  name: string;
  username: string;
  password: string;
  email: string;
  roles: Array<string>;
  comparePassword(candidatePassword: string): Promise<boolean>;
  genToken(): Object;
}

export default IUserModel;
