import { EntitySaga } from '../EntitySaga';
import IWorkshopModel from '../../Api/Datamodel/IWorkshopModel';
import { IPageableWorkshopsModel } from '../../Api/Datamodel/IPageableWorkshopsModel';
import { WorkshopApiService } from '../../Api/Workshops/WorkshopApiService';
import { WorkshopsListRoutine, WorkshopsCreateRoutine, WorkshopDeleteRoutine, WorkshopViewRoutine, WorkshopUpdateRoutine } from '../../Routines/WorkshopsRoutine';
import { State } from '../../Reducers';

export class WorkshopsSaga extends EntitySaga<IWorkshopModel, IPageableWorkshopsModel> {
  constructor() {
    super(
      (state: State) => state.workshops.sortKey,
      (state: State) => state.workshops.sortDir,
      new WorkshopApiService('/workshops'),
      WorkshopsListRoutine,
      WorkshopsCreateRoutine,
      WorkshopDeleteRoutine,
      WorkshopViewRoutine,
      WorkshopUpdateRoutine,
    );
  }
}
