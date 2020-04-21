import React, { FunctionComponent, useState } from "react";
import { Menu, MenuItemProps } from "semantic-ui-react";
interface Props {}

export const Header: FunctionComponent<Props> = (props) => {
  const [active, setActive] = useState<string>("Acceuil");
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, data: MenuItemProps) => setActive(String(data.name));
  return (
    <>
      <Menu pointing={true} secondary={true}>
        <Menu.Item name={"Acceuil"} active={active === "Acceuil"} onClick={handleClick} />
        <Menu.Item name={"Admin"} active={active === "Admin"} onClick={handleClick} />
      </Menu>
    </>
  );
};
