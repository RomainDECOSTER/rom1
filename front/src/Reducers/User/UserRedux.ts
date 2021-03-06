import { EntityRedux } from '../EntityRedux';
import IUserModel from '../../Api/Datamodel/IUserModel';
import { IPageableIUserModel } from '../../Api/Datamodel/IPageableIUserModel';
import { UsersListRoutine, UsersCreateRoutine, UserDeleteRoutine, UserViewRoutine, UserUpdateRoutine, UserSortRoutine, UsersSearchRoutine } from '../../Routines/UsersRoutines';
import { IUserState } from './IUserRedux';

export interface UserState extends IUserState {}

export class UserRedux extends EntityRedux<IUserModel, IPageableIUserModel> {
  constructor() {
    super(UsersListRoutine, UsersCreateRoutine, UserDeleteRoutine, UserViewRoutine, UserUpdateRoutine, UserSortRoutine, UsersSearchRoutine);
  }
}
