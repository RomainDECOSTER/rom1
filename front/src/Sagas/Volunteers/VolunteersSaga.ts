import { EntitySaga } from '../EntitySaga';
import IVolunteerModel from '../../Api/Datamodel/volunteer/IVolunteerModel';
import { IPegeableVolunteerModel } from '../../Api/Datamodel/volunteer/IPeageableVolunteerModel';
import { State } from '../../Reducers';
import { path } from 'ramda';
import { VolunteerApiService } from '../../Api/Volunteers/VolunteerApiService';
import { VolunteersListRoutine, VolunteersCreateRoutine, VolunteerDeleteRoutine, VolunteerViewRoutine, VolunteerUpdateRoutine, VolunteersSearchRoutine } from '../../Routines/VolunteersRoutine';
export class VolunteersSaga extends EntitySaga<IVolunteerModel, IPegeableVolunteerModel> {
  constructor() {
    super(
      (state: State, key: string) => path(key.split('.'), Object(state.volunteers)),
      new VolunteerApiService('/volunteers'),
      VolunteersListRoutine,
      VolunteersCreateRoutine,
      VolunteerDeleteRoutine,
      VolunteerViewRoutine,
      VolunteerUpdateRoutine,
      VolunteersSearchRoutine,
    );
  }
}
