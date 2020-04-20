import ServiceBase from "./ServiceBase";
import IWorkshopModel from "../model/IWorkshopModel";
import IWorshopRepository from "../repository/IWorkshopRepository";
import WorkshopRepository from "../repository/WorkshopRepository";
import IWorkshopService from "./IWorkshopService";

class WorkshopService extends ServiceBase<IWorkshopModel> implements IWorkshopService {
  private _workshopRepo: IWorshopRepository;

  constructor();
  constructor(workshopRepo: IWorshopRepository = new WorkshopRepository()) {
    super(workshopRepo);
    this._workshopRepo = workshopRepo;
  }
}

Object.seal(WorkshopService);
export default WorkshopService;
