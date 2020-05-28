import React, { FunctionComponent, useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { DisconnectRoutine } from '../../Routines/Login';
import { Routine } from 'redux-saga-routines';
import { LacleState } from '../../Types/State';
import { Routes } from '../../Routes/Routes';
import { history } from '../../store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
      textDecoration: 'none',
      color: 'white',
    },
    btn: {
      color: 'white',
    },
  }),
);

type Props = {
  loggedIn: boolean | null;
  DisconnectRoutine: Routine;
  hash: string;
  userRoles: string[] | undefined;
};

const HeaderComponent: FunctionComponent<Props> = (props) => {
  const [authItems, setAuthItem] = useState<JSX.Element[]>([]);
  const classes = useStyles();
  const disconnect = (e: any) => {
    props.DisconnectRoutine();
    history.push('/');
  };
  useEffect(() => {
    if (props.loggedIn) {
      let items: JSX.Element[] = [];
      if (props.userRoles !== undefined && props.userRoles.some((role) => role === 'admin')) {
        items.push(
          <Typography key={'admin'} variant="h6" className={classes.title} color="inherit">
            <Link to={Routes.admin.root.path} className={classes.link}>
              Administration
            </Link>
          </Typography>,
        );
      }
      if (props.userRoles !== undefined && props.userRoles.some((role) => role === 'team')) {
        items.push(
          <Typography key={'gest'} variant="h6" className={classes.title}>
            <Link to={Routes.management.root.path} className={classes.link}>
              Gestion
            </Link>
          </Typography>,
        );
      }
      setAuthItem(items);
    } else {
      setAuthItem([]);
    }
  }, [props.hash, props.loggedIn, props.userRoles, classes.title, classes.link]);
  let logItem;
  if (props.loggedIn !== null && !props.loggedIn) {
    logItem = (
      <Typography key={'login'} variant="h6" className={classes.title}>
        <Link to={Routes.login.path} className={classes.link}>
          Login
        </Link>
      </Typography>
    );
  } else {
    logItem = (
      <Button key={'logout'} onClick={disconnect} className={classes.btn}>
        <Link to={Routes.root.path} className={classes.link}>
          Déconnexion
        </Link>
      </Button>
    );
  }
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to={Routes.root.path} className={classes.link}>
              Accueil
            </Link>
          </Typography>
          {authItems}
          {logItem}
        </Toolbar>
      </AppBar>
    </>
  );
};

const mapStateToProps = (state: LacleState) => {
  return {
    loggedIn: state.user.loggedIn,
    userRoles:
      state.user !== undefined && state.user.authentication !== undefined && state.user.authentication !== undefined && state.user.authentication.user !== undefined
        ? state.user.authentication?.user.roles
        : undefined,
    hash: state.router.location.pathname,
  };
};
const mapDispatchToProps = {
  DisconnectRoutine,
};

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
