import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { store, history } from './store';
import { HashRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { JsonFormsReduxContext } from '@jsonforms/react';
import { ThemeProvider } from '@material-ui/core/styles';
import { LacleTheme } from './Tools/Theme';

ReactDOM.render(
  <Provider store={store}>
    <JsonFormsReduxContext>
      <ConnectedRouter history={history}>
        <HashRouter>
          <ThemeProvider theme={LacleTheme}>
            <App />
          </ThemeProvider>
        </HashRouter>
      </ConnectedRouter>
    </JsonFormsReduxContext>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
