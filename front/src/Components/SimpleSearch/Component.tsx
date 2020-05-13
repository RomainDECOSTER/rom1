import React, { FunctionComponent } from 'react';
import { Routine } from 'redux-saga-routines';
import { Search } from '@material-ui/icons';
import { InputBase, Grid, Theme, makeStyles, createStyles, fade } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: '100%',
      minWidth: '100%',
    },
    search: {
      display: 'flex',
      alignItems: 'center',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.primary.main, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.primary.main, 0.25),
      },
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: theme.spacing(1),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }),
);

interface ComponentProps {
  searchRoutine: Routine;
  listRoutine: Routine;
  keySearch: string;
}

export const SimpleSearchComponent: FunctionComponent<ComponentProps> = ({ searchRoutine, listRoutine, keySearch, ...props }) => {
  const classes = useStyles();
  const handleChange = (e: any) => {
    const value: string = e.currentTarget.value;
    if (value.length >= 3) {
      searchRoutine({ key: keySearch, value: value });
    } else {
      listRoutine({ searchActive: false });
    }
  };
  return (
    <Grid container={true} spacing={0} direction="column" alignItems="center" justify="center" className={classes.root}>
      <Grid item={true} xs={12} lg={12} md={12}>
        <div className={classes.search}>
          <div>
            <Search />
          </div>
          <InputBase placeholder={'Recherche...'} classes={{ root: classes.inputRoot, input: classes.inputInput }} onChange={handleChange} />
        </div>
      </Grid>
    </Grid>
  );
};
