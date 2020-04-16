import * as express from "express";

import IControllerBase from "../controllers/IControllerBase";

import permit from "../middleware/permission";

const router = express.Router();

class RoutesBase<T extends IControllerBase> {
  protected _prefixe: string = "/";
  private _controller: T;
  private _defaultRules: Object;

  constructor(controller: T, prefixe: string, defaultRules: Object) {
    this._controller = controller;
    this._prefixe = prefixe;
    this._defaultRules = defaultRules;
  }

  get routes() {
    if (this._defaultRules.hasOwnProperty("create")) {
      router.post(this._prefixe, permit(this._defaultRules["create"]), this._controller.create.bind(this._controller));
    } else {
      router.post(this._prefixe, this._controller.create.bind(this._controller));
    }

    if (this._defaultRules.hasOwnProperty("update")) {
      router.put(`${this._prefixe}/:id`, permit(this._defaultRules["update"]), this._controller.update.bind(this._controller));
    } else {
      router.put(`${this._prefixe}/:id`, this._controller.update.bind(this._controller));
    }

    if (this._defaultRules.hasOwnProperty("findById")) {
      router.get(`${this._prefixe}/:id`, permit(this._defaultRules["findById"]), this._controller.findById.bind(this._controller));
    } else {
      router.get(`${this._prefixe}/:id`, this._controller.findById.bind(this._controller));
    }

    if (this._defaultRules.hasOwnProperty("remove")) {
      router.delete(`${this._prefixe}/:id`, permit(this._defaultRules["remove"]), this._controller.remove.bind(this._controller));
    } else {
      router.delete(`${this._prefixe}/:id`, this._controller.remove.bind(this._controller));
    }

    if (this._defaultRules.hasOwnProperty("retrieve")) {
      router.get(this._prefixe, permit(this._defaultRules["retrieve"]), this._controller.retrieve.bind(this._controller));
    } else {
      router.get(this._prefixe, this._controller.retrieve.bind(this._controller));
    }

    return router;
  }
}

export default RoutesBase;
