import React, { FunctionComponent } from 'react';
import './Admin.css';
import { Tab, Tabs, Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import { UserPanel } from './Users/UsersPanel';

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

const tabs = [<Tab label={'Utilisateurs'} key={'user'} {...a11yProps(0)} />];

export const Admin: FunctionComponent<Props> = (props) => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div id={'AdminTabs'}>
      <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange} aria-label="admin tabs" className={classes.tabs}>
        {tabs}
      </Tabs>
      <TabPanel value={value} index={0}>
        <UserPanel />
      </TabPanel>
    </div>
  );
};
