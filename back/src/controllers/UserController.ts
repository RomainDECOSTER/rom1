import * as express from "express";

import IUserService from "../datagateway/service/IUserService";
import IUserModel from "../datagateway/model/IUserModel";
import IUserController from "./IUserController";
import UserService from "../datagateway/service/UserService";

import ControllerBase from "./ControllerBase";

class UserController extends ControllerBase<IUserModel> implements IUserController {
  private _userService: IUserService;

  constructor();
  constructor(userService: IUserService = new UserService()) {
    super(userService);
    this._userService = userService;
  }
}

Object.seal(UserController);
export default UserController;
