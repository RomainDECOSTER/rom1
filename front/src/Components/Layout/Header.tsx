import React, { FunctionComponent, useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, createStyles, makeStyles, Theme, Select, MenuItem, fade } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { DisconnectRoutine } from '../../Routines/Login';
import { AppCampaignSelect } from '../../Routines/App';
import { Routine } from 'redux-saga-routines';
import { Routes } from '../../Routes/Routes';
import { history, store } from '../../store';
import { State } from '../../Reducers';
import ICampaignModel from '../../Api/Datamodel/ICampaignModel';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      color: 'white',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: 'white',
    },
    link: {
      textDecoration: 'none',
      color: 'white',
    },
    btn: {
      color: 'white',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      textAlign: 'center',
      color: 'white',
    },
  }),
);

type Props = {
  loggedIn: boolean | null;
  DisconnectRoutine: Routine;
  hash: string;
  userRoles: string[] | undefined;
  campaigns: ICampaignModel[];
  campaignSelected: string;
};

const HeaderComponent: FunctionComponent<Props> = (props) => {
  const [authItems, setAuthItem] = useState<JSX.Element[]>([]);
  const classes = useStyles();

  const campaignChange = (event: any) => {
    store.dispatch(AppCampaignSelect(event.target.value));
  };

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
      <>
        <Button key={'logout'} onClick={disconnect} className={classes.btn}>
          <Link to={Routes.root.path} className={classes.link}>
            Déconnexion
          </Link>
        </Button>
        <div className={(classes.search, classes.title)}>
          <div className={classes.searchIcon}>Campagne</div>
          <Select className={classes.inputInput} label="Campagne" value={props.campaignSelected} onChange={campaignChange}>
            {props.campaigns.map((c) => {
              return (
                <MenuItem value={c._id} key={c._id}>
                  {c.name}
                </MenuItem>
              );
            })}
          </Select>
        </div>
      </>
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

const mapStateToProps = (state: State) => {
  return {
    loggedIn: state.user.loggedIn,
    userRoles:
      state.user !== undefined && state.user.authentication !== undefined && state.user.authentication !== undefined && state.user.authentication.user !== undefined
        ? state.user.authentication?.user.roles
        : undefined,
    hash: state.router.location.pathname,
    campaigns: state.campaigns.list !== undefined ? state.campaigns.list.entity.data : [],
    campaignSelected: state.app.campaignSelected,
  };
};
const mapDispatchToProps = {
  DisconnectRoutine,
};

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
