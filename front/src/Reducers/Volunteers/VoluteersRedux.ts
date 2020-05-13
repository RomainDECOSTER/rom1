import { IVolunteersState } from './IVolunteerRedux';
import { EntityRedux } from '../EntityRedux';
import IVolunteerModel from '../../Api/Datamodel/volunteer/IVolunteerModel';
import { IPegeableVolunteerModel } from '../../Api/Datamodel/volunteer/IPeageableVolunteerModel';
import {
  VolunteersListRoutine,
  VolunteersCreateRoutine,
  VolunteerDeleteRoutine,
  VolunteerViewRoutine,
  VolunteerUpdateRoutine,
  VolunteerSortRoutine,
  VolunteersSearchRoutine,
} from '../../Routines/VolunteersRoutine';

export interface VolunteersState extends IVolunteersState {}

export class VolunteersRedux extends EntityRedux<IVolunteerModel, IPegeableVolunteerModel> {
  constructor() {
    super(VolunteersListRoutine, VolunteersCreateRoutine, VolunteerDeleteRoutine, VolunteerViewRoutine, VolunteerUpdateRoutine, VolunteerSortRoutine, VolunteersSearchRoutine);
  }
}
