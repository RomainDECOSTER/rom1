import ServiceBase from "./ServiceBase";
import IVolunteerService from "./IVolunteerService";
import IVolunteerRepository from "../repository/IVolunteerRepository";
import VolunteerRepository from "../repository/VolunteerRepository";
import IVolunteerModel from "../model/volunteer/IVolunteerModel";

class VolunteerService extends ServiceBase<IVolunteerModel> implements IVolunteerService {
  private _volunteerRepo: IVolunteerRepository;

  constructor();
  constructor(volunteerRepository: IVolunteerRepository = new VolunteerRepository()) {
    super(volunteerRepository);
    this._volunteerRepo = volunteerRepository;
  }
}

Object.seal(VolunteerService);

export default VolunteerService;
