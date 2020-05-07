import { createMuiTheme } from '@material-ui/core/styles';
import { lightBlue, red } from '@material-ui/core/colors';
import { Theme } from '@material-ui/core';

export const LacleTheme: Theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: red,
  },
});
