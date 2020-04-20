import ControllerBase from "./ControllerBase";
import IWorkshopModel from "../datagateway/model/IWorkshopModel";
import IWorkshopController from "./IWorshopController";
import IWorkshopService from "../datagateway/service/IWorkshopService";
import WorkshopService from "../datagateway/service/WorkshopService";

class WorkshopController extends ControllerBase<IWorkshopModel> implements IWorkshopController {
  private _workshopService: IWorkshopService;

  constructor();
  constructor(workshopService: IWorkshopService = new WorkshopService()) {
    super(workshopService);
    this._workshopService = workshopService;
  }
}

Object.seal(WorkshopController);
export default WorkshopController;
