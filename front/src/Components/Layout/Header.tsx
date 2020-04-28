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
  hash: string;
};

const HeaderComponent: FunctionComponent<Props> = (props) => {
  const [active, setActive] = useState<string>('home');
  const [authItems, setAuthItem] = useState<JSX.Element[]>([]);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, data: MenuItemProps) => setActive(String(data.name));
  const disconnect = (e: React.MouseEvent<HTMLAnchorElement>, data: MenuItemProps) => {
    handleClick(e, data);
    props.DisconnectRoutine();
  };
  useEffect(() => {
    console.log(props.hash);
    setActive(props.hash.replace('#/', '') === '' ? 'home' : props.hash.replace('#/', ''));
    if (props.loggedIn) {
      let items: JSX.Element[] = [];
      items.push(<Menu.Item key={'adminLink'} content={'Administration'} name={'admin'} active={active === 'admin'} onClick={handleClick} as={Link} to={'admin'} />);
      setAuthItem(items);
    } else {
      setAuthItem([]);
    }
  }, [props.hash, props.loggedIn, active]);
  let logItem;
  if (props.loggedIn !== null && !props.loggedIn) {
    logItem = <Menu.Item position={'right'} content={'Connexion'} name={'login'} active={active === 'login'} onClick={handleClick} as={Link} to={'login'} />;
  } else {
    logItem = <Menu.Item position={'right'} content={'Deconnexion'} name={'disconnect'} active={active === 'disconnect'} onClick={disconnect} />;
  }
  return (
    <>
      <Menu pointing={true} secondary={true}>
        <Menu.Item content={'Acceuil'} name={'home'} active={active === 'home'} onClick={handleClick} as={Link} to={'/'} />
        {authItems}
        {logItem}
      </Menu>
    </>
  );
};

const mapStateToProps = (state: LacleState) => {
  console.log(state.router.location);
  return {
    loggedIn: state.user.loggedIn,
    hash: state.router.location.hash,
  };
};
const mapDispatchToProps = {
  DisconnectRoutine,
};

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
