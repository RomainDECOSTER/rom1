import { IEntitySaga } from '../IEntitySaga';
import IVolunteerModel from '../../Api/Datamodel/volunteer/IVolunteerModel';
import { IPegeableVolunteerModel } from '../../Api/Datamodel/volunteer/IPeageableVolunteerModel';

export interface IVolunteersSaga extends IEntitySaga<IVolunteerModel, IPegeableVolunteerModel> {}
