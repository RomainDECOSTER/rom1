import * as express from "express";

import IServiceBase from "../datagateway/service/IServiceBase";
import IEntityModel from "../datagateway/model/IEntityModel";

import Utilities from "../datagateway/model/Utilities";
import { CommonError } from "../tools/errors/CommonError";

import { logging } from "../tools/logger/LoggerManager";
const logger = logging.getLogger("controller.base");

class ControllerBase<T extends IEntityModel> {
  private _service: IServiceBase<T>;
  constructor(service) {
    this._service = service;
  }

  protected handleResponse(res: express.Response, error: any = undefined, result: any = undefined): void {
    if (error !== undefined) {
      logger.error("Controller base error", error);
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
      if (Utilities.isNullorEmpty(entity)) throw new CommonError("Missing required field");
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
      if (Utilities.isNullorEmpty(entity)) throw new CommonError("Missing required field");
      await this._service.update(entityId, entity);
      this.handleResponse(res);
    } catch (error) {
      this.handleResponse(res, error);
    }
  }

  async remove(req: express.Request, res: express.Response) {
    try {
      const entityId: string = req.params.id;
      if (Utilities.isNullorEmpty(entityId)) throw new CommonError("Missing required field");
      await this._service.remove(entityId);
      this.handleResponse(res);
    } catch (error) {
      this.handleResponse(res, error);
    }
  }

  async findById(req: express.Request, res: express.Response) {
    try {
      const entityId: string = req.params.id;
      if (Utilities.isNullorEmpty(entityId)) throw new CommonError("Missing required field");
      const entity = await this._service.findById(entityId);
      this.handleResponse(res, undefined, entity);
    } catch (error) {
      this.handleResponse(res, error);
    }
  }

  async search(req: express.Request, res: express.Response) {
    try {
      if (req.query.key === undefined || req.query.value === undefined) {
        this.handleResponse(res, new CommonError("Key and value must be defined"));
      } else {
        const key: string = String(req.query.key);
        const value: any = req.query.value;
        const pageNumber: any = !Array.isArray(req.query.page)
          ? parseInt(req.query.page !== undefined ? req.query.page.toString() : "1")
          : this.handleResponse(res, new CommonError("Page argument is an array"));
        const itemNumber: any = !Array.isArray(req.query.itemNumber)
          ? parseInt(req.query.itemNumber !== undefined ? req.query.itemNumber.toString() : "10")
          : this.handleResponse(res, new CommonError("Item number argument is an array"));
        const sortKey: any = req.query.sortKey || null;
        const sortDir: any = req.query.sortDir || null;
        const entities = await this._service.search(key, value, pageNumber, itemNumber, sortKey, sortDir);
        this.handleResponse(res, undefined, entities);
      }
    } catch (error) {
      this.handleResponse(res, error);
    }
  }

  async retrieve(req: express.Request, res: express.Response) {
    try {
      const pageNumber: any = !Array.isArray(req.query.page)
        ? parseInt(req.query.page !== undefined ? req.query.page.toString() : "1")
        : this.handleResponse(res, new CommonError("Page argument is an array"));
      const itemNumber: any = !Array.isArray(req.query.itemNumber)
        ? parseInt(req.query.itemNumber !== undefined ? req.query.itemNumber.toString() : "10")
        : this.handleResponse(res, new CommonError("Item number argument is an array"));
      const sortKey: any = req.query.sortKey || null;
      const sortDir: any = req.query.sortDir || null;
      const entities = await this._service.retrieve(pageNumber, itemNumber, sortKey, sortDir);
      this.handleResponse(res, undefined, entities);
    } catch (error) {
      this.handleResponse(res, error);
    }
  }
}

export default ControllerBase;
