import React, { FunctionComponent, ReactNode } from 'react';
import { Header } from './Header';
import { Grid } from '@material-ui/core';

interface Props {
  children: ReactNode;
}

export const Layout: FunctionComponent<Props> = (props) => {
  return (
    <div>
      <Header />
      <Grid container={true} spacing={0} direction="row" alignItems="center" justify="center" style={{ minHeight: '100%', minWidth: '100%', marginTop: '5%' }}>
        <Grid item={true} xs={12}>
          {props.children}
        </Grid>
      </Grid>
    </div>
  );
};
