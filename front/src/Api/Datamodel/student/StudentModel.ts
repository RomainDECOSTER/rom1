import IStudentModel from "./IStudentModel";
import IRegistrationModel from "../common/IRegistrationModel";
import IGeneralInformationModel from "../common/IGeneralInformationModel";
import IGeneralAvailabilitiesModel from "../common/IGeneralAvailabilitiesModel";
import IFamilySituationModel from "./IFamilySituationModel";
import IFamilyRessourcesModel from "../common/IFamilyRessourcesModel";
import IStateModel from "./IStateModel";
import ISocialMediationModel from "./ISocialMediationModel";
import IWorkshopModel from "../IWorkshopModel";
import { runInThisContext } from "vm";

class StudentModel {
  private _student: IStudentModel;

  constructor(student: IStudentModel) {
    this._student = student;
  }

  get draft(): boolean {
    return this._student.draft;
  }
  get registrationInformation(): IRegistrationModel {
    return this._student.registrationInformation;
  }
  get generalInformation(): IGeneralInformationModel {
    return this._student.generalInformation;
  }
  get availabilitiesInformation(): [IGeneralAvailabilitiesModel] {
    return this._student.availabilitiesInformation;
  }
  get type(): String {
    return this._student.type;
  }
  get familySituation(): IFamilySituationModel {
    return this._student.familySituation;
  }
  get familyRessources(): IFamilyRessourcesModel {
    return this._student.familyRessources;
  }
  get lifeState(): IStateModel {
    return this._student.lifeState;
  }
  get socialMediation(): ISocialMediationModel {
    return this._student.socialMediation;
  }
  get initial_level(): string {
    return this._student.initial_level;
  }
  get final_level(): string {
    return this._student.final_level;
  }
  get certification(): string {
    return this._student.certification;
  }
  get school_path(): string {
    return this._student.school_path;
  }
  get trainning(): string {
    return this._student.trainning;
  }
  get courses_as(): string {
    return this._student.courses_as;
  }
  get MIFE(): string {
    return this._student.MIFE;
  }
  get levelComment(): string {
    return this._student.levelComment;
  }
  get comment(): string {
    return this._student.comment;
  }
  get schoolComment(): string {
    return this._student.schoolComment;
  }
  get schoolName(): string {
    return this._student.schoolName;
  }
  get certification_final(): string {
    return this._student.certification_final;
  }
  get workshops(): [IWorkshopModel] {
    return this._student.workshops;
  }
  get workshopsComment(): string {
    return this._student.workshopsComment;
  }
  get level(): string {
    return this._student.level;
  }
  get classRoom(): [string] {
    return this._student.classRoom;
  }
  get option1(): string {
    return this._student.option1;
  }
  get option2(): string {
    return this._student.option2;
  }
  get option3(): string {
    return this._student.option3;
  }
}

Object.seal(StudentModel);

export default StudentModel;
