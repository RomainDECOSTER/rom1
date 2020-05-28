import React, { FunctionComponent, useState, useEffect } from 'react';
import { Box, Tab, Tabs, createStyles, makeStyles, Theme } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import { VolunteersPanel } from './Volunteers/VolunteersPanel';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
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
    <div role="tabpanel" hidden={value !== index} id={`management-tab-${index}`} aria-labelledby={`management-tab-${index}`} {...other}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `management-tab-${index}`,
    'aria-controls': `management-tab-${index}`,
  };
}

interface Props {}

const tabs = [<Tab label={'Bénévoles'} key={'volunteers'} {...a11yProps(0)} />];

export const Management: FunctionComponent<Props> = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const history = useHistory();
  const location = useLocation();
  const handleChange = (event: any, newValue: number) => {
    history.push('/management?managementTabs=' + newValue, { adminTabs: newValue });
  };
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    if (query.get('managementTabs') !== null) {
      setValue(parseInt(query.get('managementTabs') as string));
    } else {
      setValue(0);
    }
  }, [location]);

  return (
    <div id={'ManagementTabs'} className={classes.root}>
      <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange} aria-label="admin tabs" className={classes.tabs}>
        {tabs}
      </Tabs>
      <TabPanel value={value} index={0}>
        <VolunteersPanel />
      </TabPanel>
    </div>
  );
};
