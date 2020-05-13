import { EntitySaga } from '../EntitySaga';
import IWorkshopModel from '../../Api/Datamodel/IWorkshopModel';
import { IPageableWorkshopsModel } from '../../Api/Datamodel/IPageableWorkshopsModel';
import { WorkshopApiService } from '../../Api/Workshops/WorkshopApiService';
import { WorkshopsListRoutine, WorkshopsCreateRoutine, WorkshopDeleteRoutine, WorkshopViewRoutine, WorkshopUpdateRoutine, WorkshopsSearchRoutine } from '../../Routines/WorkshopsRoutine';
import { State } from '../../Reducers';
import { path } from 'ramda';
export class WorkshopsSaga extends EntitySaga<IWorkshopModel, IPageableWorkshopsModel> {
  constructor() {
    super(
      (state: State, key: string) => path(key.split('.'), Object(state.workshops)),
      new WorkshopApiService('/workshops'),
      WorkshopsListRoutine,
      WorkshopsCreateRoutine,
      WorkshopDeleteRoutine,
      WorkshopViewRoutine,
      WorkshopUpdateRoutine,
      WorkshopsSearchRoutine,
    );
  }
}
