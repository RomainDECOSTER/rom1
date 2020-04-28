import React from 'react';
import { Layout } from './Components/Layout';
import { Route } from 'react-router-dom';
import { Home } from './Scenes/Home/Home';
import { LoginPage } from './Scenes/Login/Login';
import { Routine } from 'redux-saga-routines';
import { connect } from 'react-redux';
import { AppRoutine } from './Routines/App';

interface Props {
  AppRoutine: Routine;
}

const AppComponent: React.FunctionComponent<Props> = (props) => {
  props.AppRoutine();
  return (
    <>
      <Layout>
        <Route path="/" exact={true} component={Home} />
        <Route path="/login" exact={true} component={LoginPage} />
      </Layout>
    </>
  );
};

export const App = connect(null, { AppRoutine })(AppComponent);
