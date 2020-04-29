import { EntityRedux } from '../EntityRedux';
import IUserModel from '../../Api/Datamodel/IUserModel';
import { IPageableIUserModel } from '../../Api/Datamodel/IPageableIUserModel';
import { UsersListRoutine } from '../../Routines/UsersRoutines';
import { IUserState } from './IUserRedux';

class UserState implements IUserState {}

export class UserRedux extends EntityRedux<IUserModel, IPageableIUserModel> {
  constructor() {
    super(UsersListRoutine, new UserState());
  }
}
