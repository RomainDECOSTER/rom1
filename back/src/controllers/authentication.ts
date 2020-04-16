import UserService from "../datagateway/service/UserService";
const userService = new UserService();
class Authentication {
  public login = async (req: any, res: any) => {
    try {
      let user = await userService.findByUsername(req.body.username);

      if (user === null) throw "User not found";

      let success = await user.comparePassword(req.body.password);
      if (success === false) throw "";

      res.status(200).json(user.genToken());
    } catch (err) {
      res.status(401).json({ message: "Invalid credentials", errors: err });
    }
  };
}

export default new Authentication();
