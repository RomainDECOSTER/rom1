import UserService from "../datagateway/service/UserService";
import { CommonError } from "../tools/errors/CommonError";
import { logging } from "../tools/logger/LoggerManager";
const logger = logging.getLogger("controller.authentication.login");
const userService = new UserService();
class Authentication {
  public login = async (req: any, res: any) => {
    try {
      let user = await userService.findByUsername(req.body.username);

      if (user === null) throw new CommonError("User not found");

      let success = await user.comparePassword(req.body.password);
      if (success === false) throw new CommonError("Compare password failed");

      res.status(200).json(user.genToken());
    } catch (err) {
      logger.error("Login failed", err);
      res.status(401).json({ message: "Invalid credentials", errors: err });
    }
  };
}

export default new Authentication();
