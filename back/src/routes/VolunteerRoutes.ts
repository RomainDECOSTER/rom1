import RoutesBase from "./RoutesBase";
import IVolunteerController from "../controllers/IVolunteerController";
import VolunteerController from "../controllers/VolunteerController";

const defaultRules: Object = {
  create: ["admin", "team"],
  update: ["admin", "team"],
  remove: ["admin", "team"],
  retrieve: ["admin", "team"],
  findById: ["admin", "team"],
};

class VolunteerRoutes extends RoutesBase<IVolunteerController> {
  private _volunteerController: IVolunteerController;

  constructor() {
    super(new VolunteerController(), "/volunteers", defaultRules);
    this._volunteerController = new VolunteerController();
  }
}

export default VolunteerRoutes;
