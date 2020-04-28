import * as passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

import UserService from "../datagateway/service/UserService";

const userService = new UserService();

class Auth {
  public initialize = () => {
    passport.use("jwt", this.getStrategy());
    return passport.initialize();
  };

  public authenticate = (callback) => passport.authenticate("jwt", { session: false, failWithError: true }, callback);

  private getStrategy = (): Strategy => {
    const params = {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      passReqToCallback: true,
    };
    return new Strategy(params, (req, payload: any, done) => {
      userService
        .findByUsername(payload.username)
        .then((user) => {
          /* istanbul ignore next: passport response */
          if (user === null) {
            return done(null, false, { message: "The user in the token was not found" });
          }

          return done(null, { _id: user._id, username: user.username, roles: user.roles });
        })
        .catch((err) => {
          /* istanbul ignore next: passport response */
          if (err) {
            return done(err);
          }
        });
    });
  };
}

export default new Auth();
