import RoutesBase from "./RoutesBase";
import IStudentController from "../controllers/IStudentController";
import StudentController from "../controllers/StudentController";

const defaultRules: Object = {
  create: ["admin", "team"],
  update: ["admin", "team"],
  remove: ["admin", "team"],
  retrieve: ["admin", "team"],
  findById: ["admin", "team"],
};

class StudentRoutes extends RoutesBase<IStudentController> {
  private _studentController: IStudentController;

  constructor() {
    super(new StudentController(), "/students", defaultRules);
    this._studentController = new StudentController();
  }
}

export default StudentRoutes;
