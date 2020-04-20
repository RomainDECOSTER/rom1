import IServiceBase from "./IServiceBase";
import IStudentModel from "../model/student/IStudentModel";

interface IStudentService extends IServiceBase<IStudentModel> {}

export default IStudentService;
