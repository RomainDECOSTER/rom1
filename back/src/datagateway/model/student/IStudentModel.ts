import IRegistrationModel from "../common/IRegistrationModel";
import IGeneralInformationModel from "../common/IGeneralInformationModel";
import IGeneralAvailabilities from "../common/IGeneralAvailabilitiesModel";
import IFamilySituationModel from "./IFamilySituationModel";
import IFamilyRessourcesModel from "../common/IFamilyRessourcesModel";
import IStateModel from "./IStateModel";
import ISocialMediationModel from "./ISocialMediationModel";
import IEntityModel from "../IEntityModel";

interface IStudentModel extends IEntityModel {
  draft: boolean;
  registrationInformation: IRegistrationModel;
  generalInformation: IGeneralInformationModel;
  availabilitiesInformation: [IGeneralAvailabilities];
  type: String;
  familySituation: IFamilySituationModel;
  familyRessources: IFamilyRessourcesModel;
  lifeState: IStateModel;
  socialMediation: ISocialMediationModel;
  initial_level: string;
  final_level: string;
  certification: string;
  school_path: string;
  trainning: string;
  courses_as: string;
  MIFE: string;
  levelComment: string;
  comment: string;
  schoolComment: string;
  schoolName: string;
  certification_final: string;
  workshopsComment: string;
  level: string;
  classRoom: [string];
  option1: string;
  option2: string;
  option3: string;
}

export default IStudentModel;
