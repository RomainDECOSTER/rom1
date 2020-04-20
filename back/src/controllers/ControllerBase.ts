import * as express from "express";

import IServiceBase from "../datagateway/service/IServiceBase";
import IEntityModel from "../datagateway/model/IEntityModel";

import Utilities from "../datagateway/model/Utilities";

class ControllerBase<T extends IEntityModel> {
  private _service: IServiceBase<T>;
  constructor(service) {
    this._service = service;
  }

  protected handleResponse(res: express.Response, error: any = undefined, result: any = undefined): void {
    if (error !== undefined) {
      console.log(error);
      res.statusCode = 400;
      if (error.errors) {
        res.json({ error: error });
      } else {
        res.json({ error: error.message });
      }
    } else {
      if (result === undefined) {
        res.json({
          success: "success",
        });
      } else {
        res.json({
          success: "success",
          entity: result,
        });
      }
    }
  }

  async create(req: express.Request, res: express.Response) {
    try {
      const entity: T = <T>req.body;
      if (Utilities.isNullorEmpty(entity)) throw new Error("Missing required field");
      await this._service.create(entity);
      this.handleResponse(res);
    } catch (error) {
      this.handleResponse(res, error);
    }
  }

  async update(req: express.Request, res: express.Response) {
    try {
      const entity: T = <T>req.body;
      const entityId: string = req.params.id;
      if (Utilities.isNullorEmpty(entity)) throw new Error("Missing required field");
      await this._service.update(entityId, entity);
      this.handleResponse(res);
    } catch (error) {
      this.handleResponse(res, error);
    }
  }

  async remove(req: express.Request, res: express.Response) {
    try {
      const entityId: string = req.params.id;
      if (Utilities.isNullorEmpty(entityId)) throw new Error("Missing required field");
      await this._service.remove(entityId);
      this.handleResponse(res);
    } catch (error) {
      this.handleResponse(res, error);
    }
  }

  async findById(req: express.Request, res: express.Response) {
    try {
      const entityId: string = req.params.id;
      if (Utilities.isNullorEmpty(entityId)) throw new Error("Missing required field");
      const entity = await this._service.findById(entityId);
      this.handleResponse(res, undefined, entity);
    } catch (error) {
      this.handleResponse(res, error);
    }
  }

  async retrieve(req: express.Request, res: express.Response) {
    try {
      const pageNumber: number = parseInt(req.params.page) || 1;
      const itemNumber: number = parseInt(req.params.items) || 10;
      const entities = await this._service.retrieve(pageNumber, itemNumber);
      this.handleResponse(res, undefined, entities);
    } catch (error) {
      this.handleResponse(res, error);
    }
  }
}

export default ControllerBase;
