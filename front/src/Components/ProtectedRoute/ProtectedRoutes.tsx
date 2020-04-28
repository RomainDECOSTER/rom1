import React, { FunctionComponent } from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';
import { checkAuthorization } from '../../Tools/Authorization';

interface Props extends RouteProps {}

const ProtectedRouteComponent: FunctionComponent<Props> = ({ ...rest }) => {
  return checkAuthorization() ? <Route {...rest} /> : <Route render={() => <Redirect to={'login'} />} />;
};

export const ProtectedRoute = ProtectedRouteComponent;
