import React, { FunctionComponent, useEffect } from 'react';
import './Admin.css';
import { Tab, Tabs, Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import { UserPanel } from './Users/UsersPanel';
import { WorkshopsPanel } from './Workshops/WorkshopsPanel';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tabs: {
      paddingBottom: theme.spacing(1),
    },
  }),
);

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`admin-tab-${index}`} aria-labelledby={`admin-tab-${index}`} {...other}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `admin-tab-${index}`,
    'aria-controls': `admin-tab-${index}`,
  };
}

interface Props {}

const tabs = [<Tab label={'Utilisateurs'} key={'user'} {...a11yProps(0)} />, <Tab label={'Atelier'} key={'workshop'} {...a11yProps(1)} />];

export const Admin: FunctionComponent<Props> = (props) => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const handleChange = (event: any, newValue: number) => {
    history.push('/admin?adminTabs=' + newValue, { adminTabs: newValue });
  };
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    if (query.get('adminTabs') !== null) {
      setValue(parseInt(query.get('adminTabs') as string));
    } else {
      setValue(0);
    }
  }, [location]);
  return (
    <div id={'AdminTabs'}>
      <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange} aria-label="admin tabs" className={classes.tabs}>
        {tabs}
      </Tabs>
      <TabPanel value={value} index={0}>
        <UserPanel />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WorkshopsPanel />
      </TabPanel>
    </div>
  );
};
