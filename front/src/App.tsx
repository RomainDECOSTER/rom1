import React from 'react';
import { Layout } from './Components/Layout';
import { Routine } from 'redux-saga-routines';
import { connect } from 'react-redux';
import { AppRoutine } from './Routines/App';
import Notifications, { NotificationsState } from 'react-notification-system-redux';
import { State } from './Reducers';

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
      </Layout>
    </>
  );
};

export const App = connect((state: State) => ({ notifications: state.notifications }), { AppRoutine })(AppComponent);
