import React from 'react';
import { Layout } from './Components/Layout';
import { Routine } from 'redux-saga-routines';
import { connect } from 'react-redux';
import { AppRoutine } from './Routines/App';
import Notifications, { NotificationsState } from 'react-notification-system-redux';
import { State } from './Reducers';
import { LoginState } from './Reducers/Login';
import { Route } from 'react-router-dom';
import { Routes } from './Routes/Routes';
import { Home } from './Scenes/Home/Home';
import { LoginPage } from './Scenes/Login/Login';
import { ProtectedRoute } from './Components/ProtectedRoute/ProtectedRoutes';
import { Admin } from './Scenes/Admin/AdminComponent';
import { CreateUser } from './Scenes/Admin/Users/Create';
import { ViewUser } from './Scenes/Admin/Users/View';
import { CreateWorkshop } from './Scenes/Admin/Workshops/Create';
import { ViewWorkshop } from './Scenes/Admin/Workshops/View';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Management } from './Scenes/Management/ManagementComponent';
import { CreateVolunteer } from './Scenes/Management/Volunteers/Create';
import { CreateStudent } from './Scenes/Management/Students/Create';
import { CreateCampaign } from './Scenes/Admin/Campaigns/Create';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }),
);

interface Props {
  AppRoutine: Routine;
  notifications: NotificationsState;
  user: LoginState;
  appStarted: boolean;
  appStarting: boolean;
}

const AppComponent: React.FunctionComponent<Props> = ({ notifications, AppRoutine, user, appStarted, appStarting }, ...props) => {
  const classes = useStyles();
  if (user.loggedIn === false && appStarting === false && appStarted === false) {
    AppRoutine();
  }
  if (appStarting) {
    return (
      <div className={classes.root}>
        <CircularProgress />
      </div>
    );
  } else if (appStarted) {
    return (
      <>
        <Layout>
          <Notifications notifications={notifications} />
          <Route path={Routes.root.path} exact={Routes.root.exact} component={Home} />
          <Route path={Routes.login.path} exact={Routes.login.exact} component={LoginPage} />
          <ProtectedRoute roles={Routes.admin.roles} path={Routes.admin.root.path} exact={Routes.admin.root.exact} component={Admin} />
          <ProtectedRoute roles={Routes.admin.roles} path={Routes.admin.user.create.path} exact={Routes.admin.user.create.exact} component={CreateUser} />
          <ProtectedRoute roles={Routes.admin.roles} path={Routes.admin.user.view.path} exact={Routes.admin.user.view.exact} component={ViewUser} />
          <ProtectedRoute roles={Routes.admin.roles} path={Routes.admin.workshops.create.path} exact={Routes.admin.workshops.create.exact} component={CreateWorkshop} />
          <ProtectedRoute roles={Routes.admin.roles} path={Routes.admin.workshops.view.path} exact={Routes.admin.workshops.view.exact} component={ViewWorkshop} />
          <ProtectedRoute roles={Routes.management.roles} path={Routes.management.root.path} exact={Routes.management.root.exact} component={Management} />
          <ProtectedRoute roles={Routes.management.roles} path={Routes.management.volunteers.create.path} exact={Routes.management.volunteers.create.exact} component={CreateVolunteer} />
          <ProtectedRoute roles={Routes.management.roles} path={Routes.management.students.create.path} exact={Routes.management.students.create.exact} component={CreateStudent} />
          <ProtectedRoute roles={Routes.admin.roles} path={Routes.admin.campaigns.create.path} exact={Routes.admin.campaigns.create.exact} component={CreateCampaign} />
        </Layout>
      </>
    );
  } else {
    return <></>;
  }
};

export const App = connect((state: State) => ({ notifications: state.notifications, user: state.user, appStarted: state.app.started, appStarting: state.app.starting }), { AppRoutine })(AppComponent);
