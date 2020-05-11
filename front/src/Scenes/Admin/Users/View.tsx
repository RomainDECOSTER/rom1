import React, { FunctionComponent } from 'react';
import { State } from '../../../Reducers';
import { connect } from 'react-redux';
import IUserModel from '../../../Api/Datamodel/IUserModel';
import { Card, Typography, createStyles, makeStyles, Theme, CardContent } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { Routes } from '../../../Routes/Routes';

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
  user: IUserModel | undefined;
}

const ViewUserComponent: FunctionComponent<PropsComponent> = ({ user }, ...props) => {
  const classes = useStyles();
  let content = null;
  if (user !== undefined) {
    content = (
      <>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Nom d'utilisateur : {user.username}
            </Typography>
            <Typography className={classes.pos}>Nom : {user.name}</Typography>
            <Typography variant="body2" component="p">
              Email : {user.email}
            </Typography>
            <Typography variant="body2" component="p">
              Roles : {user.roles.join(', ')}
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
    user: state.users.details,
  };
};

interface PropsContainer {
  user: IUserModel | undefined;
}

const ViewUserContainer: FunctionComponent<PropsContainer> = ({ user }, ...props) => {
  return <ViewUserComponent user={user} />;
};

export const ViewUser = connect(mapStateToProps)(ViewUserContainer);
