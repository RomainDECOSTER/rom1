import { EntitySaga } from '../EntitySaga';
import IUserModel from '../../Api/Datamodel/IUserModel';
import { IPageableIUserModel } from '../../Api/Datamodel/IPageableIUserModel';
import { UserApiService } from '../../Api/Users/UserApiService';
import { UsersListRoutine } from '../../Routines/UsersRoutines';
import { State } from '../../Reducers';

export class UserSaga extends EntitySaga<IUserModel, IPageableIUserModel> {
  constructor(state: State) {
    super(new UserApiService('/users'), UsersListRoutine);
  }
}
