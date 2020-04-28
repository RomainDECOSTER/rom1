import React, { FunctionComponent } from 'react';
import { Header } from 'semantic-ui-react';

export const Home: FunctionComponent<any> = (props) => {
  return (
    <>
      <Header as={'h1'} textAlign={'center'}>
        Bienvue sur 2ROM
      </Header>
    </>
  );
};
