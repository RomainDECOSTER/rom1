import React from 'react';
import { Layout } from './Components/Layout';
import { Routine } from 'redux-saga-routines';
import { connect } from 'react-redux';
import { AppRoutine } from './Routines/App';
import Notifications, { NotificationsState } from 'react-notification-system-redux';
import { State } from './Reducers';
import { Route } from 'react-router-dom';
import { Routes } from './Routes/Routes';
import { Home } from './Scenes/Home/Home';
import { LoginPage } from './Scenes/Login/Login';
import { ProtectedRoute } from './Components/ProtectedRoute/ProtectedRoutes';
import { Admin } from './Scenes/Admin/AdminComponent';
import { CreateUser } from './Scenes/Admin/Users/Create';
import { ViewUser } from './Scenes/Admin/Users/View';

interface Props {
  AppRoutine: Routine;
  notifications: NotificationsState;
}

const AppComponent: React.FunctionComponent<Props> = ({ notifications, AppRoutine }, ...props) => {
  AppRoutine();
  return (
    <>
      <Layout>
        <Notifications notifications={notifications} />
        <Route path={Routes.root.path} exact={Routes.root.exact} component={Home} />
        <Route path={Routes.login.path} exact={Routes.login.exact} component={LoginPage} />
        <ProtectedRoute roles={Routes.admin.roles} path={Routes.admin.root.path} exact={Routes.admin.root.exact} component={Admin} />
        <ProtectedRoute roles={Routes.admin.roles} path={Routes.admin.user.create.path} exact={Routes.admin.user.create.exact} component={CreateUser} />
        <ProtectedRoute roles={Routes.admin.roles} path={Routes.admin.user.view.path} exact={Routes.admin.user.view.exact} component={ViewUser} />
      </Layout>
    </>
  );
};

export const App = connect((state: State) => ({ notifications: state.notifications }), { AppRoutine })(AppComponent);
