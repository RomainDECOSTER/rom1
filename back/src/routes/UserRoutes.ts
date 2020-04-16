import * as express from "express";

import IUserController from "../controllers/IUserController";
import UserController from "../controllers/UserController";

import RoutesBase from "./RoutesBase";

const defaultRules: Object = {
  create: "admin",
  update: "admin",
  remove: "admin",
  findById: ["admin", "team"],
  retrieve: ["admin", "team"],
};

class UserRoutes extends RoutesBase<IUserController> {
  private _userController: IUserController;

  constructor() {
    super(new UserController(), "/users", defaultRules);
    this._userController = new UserController();
  }
}

export default UserRoutes;
