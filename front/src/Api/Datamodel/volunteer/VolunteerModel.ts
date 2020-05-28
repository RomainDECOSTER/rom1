import IVolunteerModel from './IVolunteerModel';
import IRegistrationModel from '../common/IRegistrationModel';
import IGeneralInformationModel from '../common/IGeneralInformationModel';
import IGeneralAvailabilitiesModel from '../common/IGeneralAvailabilitiesModel';
import IProposedSubectModel from './IProposedSubectModel';
import IFamilyRessourcesModel from '../common/IFamilyRessourcesModel';
import IStateModel from '../student/IStateModel';
import IWorkshopModel from '../IWorkshopModel';
class VolunteerModel {
  private _volunteer: IVolunteerModel;

  constructor(volunteer: IVolunteerModel) {
    this._volunteer = volunteer;
  }

  get draft(): boolean {
    return this._volunteer.draft;
  }
  get registrationInformation(): IRegistrationModel {
    return this._volunteer.registrationInformation;
  }
  get generalInformation(): IGeneralInformationModel {
    return this._volunteer.generalInformation;
  }
  get availabilitiesInformation(): [IGeneralAvailabilitiesModel] {
    return this._volunteer.availabilitiesInformation;
  }
  get proposedSubject(): [IProposedSubectModel] {
    return this._volunteer.proposedSubject;
  }
  get familyRessources(): IFamilyRessourcesModel {
    return this._volunteer.familyRessources;
  }
  get lifeState(): IStateModel {
    return this._volunteer.lifeState;
  }
  get comment(): string {
    return this._volunteer.comment;
  }
  get otherIntervention(): string {
    return this._volunteer.otherIntervention;
  }
  get workshops(): [IWorkshopModel] {
    return this._volunteer.workshops;
  }
}

export default VolunteerModel;
