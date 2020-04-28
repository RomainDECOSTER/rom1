import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { store, history } from './store';
import { HashRouter, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Home } from './Scenes/Home/Home';
import { LoginPage } from './Scenes/Login/Login';
import { ProtectedRoute } from './Components/ProtectedRoute/ProtectedRoutes';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HashRouter>
        <App />
        <Route path="/" exact={true} component={Home} />
        <Route path="/login" exact={true} component={LoginPage} />
        <ProtectedRoute roles={['admin']} path="/admin" exact={true} component={() => <p>Admin</p>} />
      </HashRouter>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
