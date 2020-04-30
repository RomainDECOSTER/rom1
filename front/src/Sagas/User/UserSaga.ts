import { EntitySaga } from '../EntitySaga';
import IUserModel from '../../Api/Datamodel/IUserModel';
import { IPageableIUserModel } from '../../Api/Datamodel/IPageableIUserModel';
import { UserApiService } from '../../Api/Users/UserApiService';
import { UsersListRoutine } from '../../Routines/UsersRoutines';

export class UserSaga extends EntitySaga<IUserModel, IPageableIUserModel> {
  constructor() {
    super(new UserApiService('/users'), UsersListRoutine);
  }
}
