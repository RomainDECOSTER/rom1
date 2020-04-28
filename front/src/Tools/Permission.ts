import { LoginSuccess } from '../Types/User/Login';
export function checkPermission(componentRoles: Array<string>) {
  // attempt to grab the token from localstorage
  const storedToken = localStorage.getItem('token');
  const storedUser = localStorage.getItem('user');

  // if it exists
  if (storedToken && storedUser) {
    // parse it down into an object
    const authentication: LoginSuccess = { ...JSON.parse(storedToken), user: JSON.parse(storedUser) };
    let roleFound = authentication.user.roles.some((role) => componentRoles.some((cRole) => role === cRole));
    return roleFound;
  }

  return false;
}
