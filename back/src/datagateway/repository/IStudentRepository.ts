import IRepositoryBase from "./IRepositoryBase";
import IStudentModel from "../model/student/IStudentModel";

interface IStudentRepository extends IRepositoryBase<IStudentModel> {}

export default IStudentRepository;
