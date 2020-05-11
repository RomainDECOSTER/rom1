import { createRoutine } from 'redux-saga-routines';

export const UsersListRoutine = createRoutine('USERS_LIST');
export const UsersCreateRoutine = createRoutine('USERS_CREATE');
export const UserDeleteRoutine = createRoutine('USER_DELETE');
export const UserViewRoutine = createRoutine('USER_VIEW');
export const UserUpdateRoutine = createRoutine('USER_UPDATE');
export const UserSortRoutine = createRoutine('USER_SORT');
