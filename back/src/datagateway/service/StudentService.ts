import ServiceBase from "./ServiceBase";
import IStudentModel from "../model/student/IStudentModel";
import IStudentService from "./IStudentService";
import IStudentRepository from "../repository/IStudentRepository";
import StudentRepository from "../repository/StudentRepository";

class StudentService extends ServiceBase<IStudentModel> implements IStudentService {
  private _studentRepo: IStudentRepository;

  constructor();
  constructor(studentRepository: IStudentRepository = new StudentRepository()) {
    super(studentRepository);
    this._studentRepo = studentRepository;
  }
}

Object.seal(StudentService);

export default StudentService;
