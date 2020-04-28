import React, { FunctionComponent } from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';
import { checkAuthorization } from '../../Tools/Authorization';
import { checkPermission } from '../../Tools/Permission';
import { connect } from 'react-redux';
import { error } from 'react-notification-system-redux';
import { NotAllowedNotification } from '../../Tools/Notifications/Errors';
interface Props extends RouteProps {
  roles: Array<string>;
  dispatch: Function;
}

const ProtectedRouteComponent: FunctionComponent<Props> = ({ roles, dispatch, ...rest }) => {
  const authorized = checkAuthorization();
  const allowed = checkPermission(roles);
  if (authorized && allowed) {
    return <Route {...rest} />;
  } else if (!authorized) {
    return <Route render={() => <Redirect to={'login'} />} />;
  } else if (!allowed) {
    dispatch(error(NotAllowedNotification));
    return <p>not allowed</p>;
  } else {
    return <p>Problem</p>;
  }
};

export const ProtectedRoute = connect()(ProtectedRouteComponent);
