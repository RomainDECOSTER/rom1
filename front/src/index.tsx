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
import { Admin } from './Scenes/Admin/AdminComponent';
import { Routes } from './Routes/Routes';
import { CreateUser } from './Scenes/Admin/Users/Create';
import { JsonFormsReduxContext } from '@jsonforms/react';

ReactDOM.render(
  <Provider store={store}>
    <JsonFormsReduxContext>
      <ConnectedRouter history={history}>
        <HashRouter>
          <App />
          {/* <Route path={Routes.root.path} exact={Routes.root.exact} component={Home} />
          <Route path={Routes.login.path} exact={Routes.login.exact} component={LoginPage} />
          <ProtectedRoute roles={Routes.admin.roles} path={Routes.admin.root.path} exact={Routes.admin.root.exact} component={Admin} />
          <ProtectedRoute roles={Routes.admin.roles} path={Routes.admin.user.create.path} exact={Routes.admin.user.create.exact} component={CreateUser} /> */}
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
