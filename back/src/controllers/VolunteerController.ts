import ControllerBase from "./ControllerBase";
import IVolunteerModel from "../datagateway/model/volunteer/IVolunteerModel";
import IVolunteerController from "./IVolunteerController";
import IVolunteerService from "../datagateway/service/IVolunteerService";
import VolunteerService from "../datagateway/service/VolunteerService";

class VolunteerController extends ControllerBase<IVolunteerModel> implements IVolunteerController {
  private _volunteerService: IVolunteerService;

  constructor();
  constructor(volunteerService: IVolunteerService = new VolunteerService()) {
    super(volunteerService);
    this._volunteerService = volunteerService;
  }
}

Object.seal(VolunteerController);

export default VolunteerController;
