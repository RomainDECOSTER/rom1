import IUserModel from "./IUserModel";

class UserModel {
  private _user: IUserModel;

  constructor(userModel: IUserModel) {
    this._user = userModel;
  }

  get username(): string {
    return this._user.username;
  }

  get name(): string {
    return this._user.name;
  }

  get email(): string {
    return this._user.email;
  }

  get password(): string {
    return this._user.password;
  }
}

Object.seal(UserModel);

export default UserModel;
