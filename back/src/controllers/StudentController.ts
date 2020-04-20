import ControllerBase from "./ControllerBase";
import IStudentModel from "../datagateway/model/student/IStudentModel";
import IStudentController from "./IStudentController";
import IStudentService from "../datagateway/service/IStudentService";
import StudentService from "../datagateway/service/StudentService";

class StudentController extends ControllerBase<IStudentModel> implements IStudentController {
  private _studentService: IStudentService;

  constructor();
  constructor(studentService: IStudentService = new StudentService()) {
    super(studentService);
    this._studentService = studentService;
  }
}

Object.seal(StudentController);

export default StudentController;
