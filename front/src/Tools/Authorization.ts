import momentTz from 'moment-timezone';
import { LoginState } from '../Reducers/Login';
export function checkAuthorization(user: LoginState) {
  if (user.loggedIn === true && user.authentication !== undefined) {
    // this just all works to compare the total seconds of the created
    // time of the token vs the ttl (time to live) seconds
    const expiresMoment = momentTz.unix(user.authentication.exprires);
    const moment = momentTz();

    // if the token has expired return false
    if (expiresMoment.isBefore(moment)) return false;

    return true;
  }

  return false;
}
