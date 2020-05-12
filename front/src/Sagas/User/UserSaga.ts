import { EntitySaga } from '../EntitySaga';
import IUserModel from '../../Api/Datamodel/IUserModel';
import { IPageableIUserModel } from '../../Api/Datamodel/IPageableIUserModel';
import { UserApiService } from '../../Api/Users/UserApiService';
import { UsersListRoutine, UsersCreateRoutine, UserDeleteRoutine, UserViewRoutine, UserUpdateRoutine } from '../../Routines/UsersRoutines';
import { State } from '../../Reducers';

export class UserSaga extends EntitySaga<IUserModel, IPageableIUserModel> {
  constructor() {
    super(
      (state: State) => state.users.sortKey,
      (state: State) => state.users.sortDir,
      new UserApiService('/users'),
      UsersListRoutine,
      UsersCreateRoutine,
      UserDeleteRoutine,
      UserViewRoutine,
      UserUpdateRoutine,
    );
  }
}
