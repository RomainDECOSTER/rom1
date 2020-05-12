import { LoginSuccess } from '../Types/User/Login';
import { LoginState } from '../Reducers/Login';
export function checkPermission(componentRoles: Array<string>, user: LoginState) {
  // // attempt to grab the token from localstorage
  // const storedToken = localStorage.getItem('token');
  // const storedUser = localStorage.getItem('user');

  // if it exists
  if (user.loggedIn === true && user.authentication !== undefined) {
    // parse it down into an object
    const authentication: LoginSuccess = user.authentication;
    let roleFound = authentication.user.roles.some((role) => componentRoles.some((cRole) => role === cRole));
    return roleFound;
  }

  return false;
}
