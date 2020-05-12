import React, { FunctionComponent, useState, useEffect } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { checkAuthorization } from '../../Tools/Authorization';
import { checkPermission } from '../../Tools/Permission';
import { error } from 'react-notification-system-redux';
import { NotAllowedNotification } from '../../Tools/Notifications/Errors';
import { store } from '../../store';
import { Routes } from '../../Routes/Routes';
import { connect } from 'react-redux';
import { State } from '../../Reducers';
import { LoginState } from '../../Reducers/Login';
interface Props {
  roles: Array<string>;
  component: any;
  path: string;
  exact: boolean;
  user: LoginState;
}

const ProtectedRouteComponent: FunctionComponent<Props> = ({ roles, component: Component, user, ...rest }) => {
  const location = useLocation();
  const [authorized, setAuthorized] = useState(true);
  const [allowed, setAllowed] = useState(true);
  useEffect(() => {
    setAuthorized(checkAuthorization(user));
    setAllowed(checkPermission(roles, user));
  }, [location, roles, user]);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authorized && allowed) {
          return <Component {...props} />;
        } else {
          store.dispatch(error(NotAllowedNotification));
          return (
            <Redirect
              to={{
                pathname: Routes.root.path,
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
};

export const ProtectedRoute = connect((state: State) => ({ user: state.user }))(ProtectedRouteComponent);
