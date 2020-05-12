import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { UserFormConfig } from '../../../FromsConfig/Users/config';
import { extractData } from '@jsonforms/core/lib/reducers/core';
import { State } from '../../../Reducers';
import { UserState } from '../../../Reducers/User/UserRedux';
import { UsersCreateRoutine, UserUpdateRoutine } from '../../../Routines/UsersRoutines';
import { Routine } from 'redux-saga-routines';
import { CreateContainer } from '../../../Components/FormContainer/FormContainer';

interface PropsContainer {
  UsersCreateRoutine: Routine;
  UserUpdateRoutine: Routine;
  userData: UserState;
  hasUserDetail: boolean;
  user: UserState;
}

const CreateUserContainer: FunctionComponent<PropsContainer> = ({ UsersCreateRoutine, userData, hasUserDetail, UserUpdateRoutine, user }, ...props) => {
  return (
    <CreateContainer
      formTitle={'Ajouter un utilisateur'}
      formConfig={UserFormConfig}
      entityFormData={userData}
      createRoutine={UsersCreateRoutine}
      updateRoutine={UserUpdateRoutine}
      hasEntityDetails={hasUserDetail}
      entity={{ user: user }}
    />
  );
};

const mapsStateToProps = (state: State) => {
  return {
    userData: extractData(state.jsonforms.core).user,
    hasUserDetail: state.users.details !== undefined,
    user: state.users.details !== undefined ? state.users.details : {},
  };
};

export const CreateUser = connect(mapsStateToProps, { UsersCreateRoutine, UserUpdateRoutine })(CreateUserContainer);
