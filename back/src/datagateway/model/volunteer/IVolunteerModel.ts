import IEntityModel from "../IEntityModel";
import IRegistrationModel from "../common/IRegistrationModel";
import IGeneralInformationModel from "../common/IGeneralInformationModel";
import IGeneralAvailabilitiesModel from "../common/IGeneralAvailabilitiesModel";
import IProposedSubectModel from "./IProposedSubectModel";
import IFamilyRessourcesModel from "../common/IFamilyRessourcesModel";
import IStateModel from "../student/IStateModel";
import IWorkshopModel from "../IWorkshopModel";
import ICampaignModel from "../ICampaignModel";

interface IVolunteerModel extends IEntityModel {
  draft: boolean;
  registrationInformation: IRegistrationModel;
  generalInformation: IGeneralInformationModel;
  availabilitiesInformation: [IGeneralAvailabilitiesModel];
  proposedSubject: [IProposedSubectModel];
  familyRessources: IFamilyRessourcesModel;
  lifeState: IStateModel;
  comment: string;
  otherIntervention: string;
  workshops: [IWorkshopModel];
  campaign: ICampaignModel;
  campaign_history: [any];
}

export default IVolunteerModel;
