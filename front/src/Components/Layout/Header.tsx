import React, { FunctionComponent, useState, useEffect } from 'react';
import { Menu, MenuItemProps } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { DisconnectRoutine } from '../../Routines/Login';
import { Routine } from 'redux-saga-routines';
import { LacleState } from '../../Types/State';
type Props = {
  loggedIn: boolean | null;
  DisconnectRoutine: Routine;
  pathname: string;
};

const HeaderComponent: FunctionComponent<Props> = (props) => {
  const [active, setActive] = useState<string>('home');
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, data: MenuItemProps) => setActive(String(data.name));
  const disconnect = (e: React.MouseEvent<HTMLAnchorElement>, data: MenuItemProps) => {
    handleClick(e, data);
    props.DisconnectRoutine();
  };
  useEffect(() => {
    setActive(props.pathname.replace('/', '') === '' ? 'home' : props.pathname.replace('/', ''));
  }, [props.pathname]);
  let logItem;
  if (props.loggedIn !== null && !props.loggedIn) {
    logItem = <Menu.Item position={'right'} content={'Connexion'} name={'login'} active={active === 'login'} onClick={handleClick} as={Link} to={'/login'} />;
  } else {
    logItem = <Menu.Item position={'right'} content={'Deconnexion'} name={'disconnect'} active={active === 'disconnect'} onClick={disconnect} />;
  }
  return (
    <>
      <Menu pointing={true} secondary={true}>
        <Menu.Item content={'Acceuil'} name={'home'} active={active === 'home'} onClick={handleClick} as={Link} to={'/'} />
        <Menu.Item content={'Administration'} name={'admin'} active={active === 'admin'} onClick={handleClick} as={Link} to={'/admin'} />

        {logItem}
      </Menu>
    </>
  );
};

const mapStateToProps = (state: LacleState) => {
  return {
    loggedIn: state.user.loggedIn,
    pathname: state.router.location.pathname,
  };
};
const mapDispatchToProps = {
  DisconnectRoutine,
};

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
