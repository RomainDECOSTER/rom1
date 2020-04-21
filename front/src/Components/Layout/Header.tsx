import React, { FunctionComponent, useState } from 'react';
import { Menu, MenuItemProps } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
interface Props {
  loggedIn: boolean;
}

const HeaderComponent: FunctionComponent<Props> = (props) => {
  const [active, setActive] = useState<string>('home');
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, data: MenuItemProps) => setActive(String(data.name));
  return (
    <>
      <Menu pointing={true} secondary={true}>
        <Menu.Item content={'Acceuil'} name={'home'} active={active === 'home'} onClick={handleClick} as={Link} to={'/'} />
        <Menu.Item content={'Administration'} name={'admin'} active={active === 'admin'} onClick={handleClick} as={Link} to={'/admin'} />

        <Menu.Item position={'right'} content={'Connexion'} name={'login'} active={active === 'login'} onClick={handleClick} as={Link} to={'/login'} />
      </Menu>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loggedIn: state.user.loggedIn,
  };
};
const mapDispatchToProps = (dispatch: object) => {
  return {};
};

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
