import { Model } from "mongoose";

import RepositoryBase from "./RepositoryBase";
import IStudentModel from "../model/student/IStudentModel";
import IStudentRepository from "./IStudentRepository";
import StudentSchema from "../schema/student/StudentSchema";

class StudentRepository extends RepositoryBase<IStudentModel> implements IStudentRepository {
  private _dbContext: Model<IStudentModel>;

  constructor();
  constructor(dbContext: Model<IStudentModel> = StudentSchema) {
    super(dbContext);
    this._dbContext = dbContext;
  }
}

Object.seal(StudentRepository);

export default StudentRepository;
