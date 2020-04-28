import React from 'react';
import { Layout } from './Components/Layout';
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
        <p>Put toast config here</p>
      </Layout>
    </>
  );
};

export const App = connect(null, { AppRoutine })(AppComponent);
