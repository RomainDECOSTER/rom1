import { IEntitySate, IEntityRedux } from '../IEntityRedux';
import IVolunteerModel from '../../Api/Datamodel/volunteer/IVolunteerModel';
import { IPegeableVolunteerModel } from '../../Api/Datamodel/volunteer/IPeageableVolunteerModel';

export interface IVolunteersState extends IEntitySate<IVolunteerModel, IPegeableVolunteerModel> {}

export interface IVolunteersRedux extends IEntityRedux<IVolunteerModel, IPegeableVolunteerModel> {}
