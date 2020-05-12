import React, { FunctionComponent, useState, useEffect } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Visibility, Edit, Delete } from '@material-ui/icons';
import { store } from '../../store';
import { UserDeleteRoutine, UserViewRoutine } from '../../Routines/UsersRoutines';
import { Link } from 'react-router-dom';

interface Props {
  row: any;
  more: boolean;
  path: any;
}

export const DefaultActions: FunctionComponent<Props> = ({ row, more, path }, ...props) => {
  const [currentId, setCurrentId] = useState('');
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  useEffect(() => {
    if (confirm) {
      store.dispatch(UserDeleteRoutine(currentId));
    }
  }, [confirm, currentId]);

  let moreElement: JSX.Element = <></>;
  if (more) {
    moreElement = (
      <IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={(event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)}>
        <MoreVertIcon />
      </IconButton>
    );
  }
  return (
    <>
      <Link key={`link-view-${row._id}`} to={path.view.path.replace(':id', row._id)}>
        <Button key={`view-${row._id}`} color={'primary'} onClick={() => store.dispatch(UserViewRoutine(row._id))}>
          <Visibility />
        </Button>
      </Link>
      <Link key={`link-edit-${row._id}`} to={path.create.path}>
        <Button key={`edit-${row._id}`} color={'primary'} onClick={() => store.dispatch(UserViewRoutine(row._id))}>
          <Edit color={'primary'} />
        </Button>
      </Link>
      <Button
        key={`delete-${row._id}`}
        color={'secondary'}
        onClick={() => {
          setCurrentId(row._id);
          setOpen(true);
        }}
      >
        <Delete />
      </Button>
      {moreElement}
      <Menu key={`menu-${row._id}`} open={menuOpen} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
        <MenuItem>
          <p>In progress</p>
        </MenuItem>
      </Menu>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Êtes-vous sur ?</DialogTitle>
        <DialogContent>{row.username !== undefined ? row.username : `${row.first_name} ${row.last_name}`} sera supprimé</DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setConfirm(true);
              setOpen(false);
            }}
            color={'secondary'}
          >
            OUI
          </Button>
          <Button
            onClick={() => {
              setConfirm(false);
              setOpen(false);
            }}
            color={'primary'}
          >
            NON
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
