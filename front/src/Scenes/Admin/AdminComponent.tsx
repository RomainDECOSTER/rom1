import React, { FunctionComponent } from 'react';
import './Admin.css';
import { Tab } from 'semantic-ui-react';
import { UsersList } from './Users/UsersListContainer';
interface Props {}

const panes = [
  {
    menuItem: 'Utilisateurs',
    render: () => (
      <Tab.Pane attached={false}>
        <UsersList />
      </Tab.Pane>
    ),
  },
];

export const Admin: FunctionComponent<Props> = (props) => {
  return (
    <div id={'AdminTabs'}>
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    </div>
  );
};
