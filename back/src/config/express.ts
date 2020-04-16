const dotenv = require("dotenv").config();
const express = require("express");
import auth from "../middleware/auth";
const bodyParser = require("body-parser");
const db = require("../database/connection");

export = () => {
  let app = express();

  app.use(bodyParser.json());
  // app.use(expressValidator());

  app.use(auth.initialize());

  app.all("*", (req, res, next) => {
    if (req.path.includes("login")) return next();

    return auth.authenticate((err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        if (info.name === "TokenExpiredError") {
          return res.status(401).json({ message: "Your token has expired. Please generate a new one" });
        } else {
          return res.status(401).json({ message: info.message });
        }
      } else {
        req.user = user;
      }
      return next();
    })(req, res, next);
  });

  const router = express.Router();
  app.use("", router);
  app.use("/v:version/", router);

  require("../routes")(router);

  return app;
};
