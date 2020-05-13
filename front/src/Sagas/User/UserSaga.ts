import { EntitySaga } from '../EntitySaga';
import IUserModel from '../../Api/Datamodel/IUserModel';
import { IPageableIUserModel } from '../../Api/Datamodel/IPageableIUserModel';
import { UserApiService } from '../../Api/Users/UserApiService';
import { UsersListRoutine, UsersCreateRoutine, UserDeleteRoutine, UserViewRoutine, UserUpdateRoutine, UsersSearchRoutine } from '../../Routines/UsersRoutines';
import { State } from '../../Reducers';
import { path } from 'ramda';
export class UserSaga extends EntitySaga<IUserModel, IPageableIUserModel> {
  constructor() {
    super(
      (state: State, key: string) => path(key.split('.'), Object(state.workshops)),
      new UserApiService('/users'),
      UsersListRoutine,
      UsersCreateRoutine,
      UserDeleteRoutine,
      UserViewRoutine,
      UserUpdateRoutine,
      UsersSearchRoutine,
    );
  }
}
