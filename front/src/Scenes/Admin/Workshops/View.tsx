import React, { FunctionComponent } from 'react';
import { makeStyles, Theme, createStyles, Card, CardContent, Typography } from '@material-ui/core';
import IWorkshopModel from '../../../Api/Datamodel/IWorkshopModel';
import { Redirect } from 'react-router-dom';
import { Routes } from '../../../Routes/Routes';
import { State } from '../../../Reducers';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: '30%',
    },
    pos: {
      marginBottom: 12,
    },
  }),
);

interface PropsComponent {
  workshop: IWorkshopModel | undefined;
}

const ViewWorkshopComponent: FunctionComponent<PropsComponent> = ({ workshop }, ...props) => {
  const classes = useStyles();
  let content = null;
  if (workshop !== undefined) {
    content = (
      <>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Dénomination : {workshop.name}
            </Typography>
          </CardContent>
        </Card>
      </>
    );
  } else {
    content = <Redirect to={Routes.admin.root.path} />;
  }
  return <>{content}</>;
};

const mapStateToProps = (state: State) => {
  return {
    workshop: state.workshops.details,
  };
};

interface PropsContainer {
  workshop: IWorkshopModel | undefined;
}

const ViewWorkshopContainer: FunctionComponent<PropsContainer> = ({ workshop }, ...props) => {
  return <ViewWorkshopComponent workshop={workshop} />;
};

export const ViewWorkshop = connect(mapStateToProps)(ViewWorkshopContainer);
