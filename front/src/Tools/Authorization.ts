import momentTz from 'moment-timezone';
import { LoginSuccess } from '../Types/User/Login';
export function checkAuthorization() {
  // attempt to grab the token from localstorage
  const storedToken = localStorage.getItem('token');
  const storedUser = localStorage.getItem('user');

  // if it exists
  if (storedToken && storedUser) {
    // parse it down into an object
    const authentication: LoginSuccess = { ...JSON.parse(storedToken), user: JSON.parse(storedUser) };

    // this just all works to compare the total seconds of the created
    // time of the token vs the ttl (time to live) seconds
    const expiresMoment = momentTz.unix(authentication.exprires);
    const moment = momentTz();

    // if the token has expired return false
    if (expiresMoment.isBefore(moment)) return false;

    return true;
  }

  return false;
}
