import { Schema, Model } from "mongoose";
import * as bcrypt from "bcryptjs";
import * as moment from "moment";
import * as jwt from "jwt-simple";

import IUserModel from "../model/IUserModel";

const DataAccess = require("../../database/connection");

const mongoConn = DataAccess.mongoConnection;

class UserSchema {
  static getSchema() {
    const schema: Schema = new Schema(
      {
        name: { type: Schema.Types.String },
        username: { type: Schema.Types.String },
        email: { type: Schema.Types.String },
        password: { type: Schema.Types.String },
        roles: [{ type: Schema.Types.String }],
      },
      {
        timestamps: true,
      }
    )
      .pre<IUserModel>("save", function (next) {
        bcrypt.hash(this.password, 10, (err, hash) => {
          this.password = hash;
          next();
        });
      })
      .pre<IUserModel>("update", function (next) {
        bcrypt.hash(this.password, 10, (err, hash) => {
          this.password = hash;
          next();
        });
      });

    schema.methods.comparePassword = function (candidatePassword: string): Promise<boolean> {
      const password = this.password;
      return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, password, (err, success) => {
          if (err) return reject(err);
          return resolve(success);
        });
      });
    };

    schema.methods.genToken = function () {
      const username = this.username;
      const expires = moment().utc().add(7, "days").unix();
      const token = jwt.encode(
        {
          exp: expires,
          username,
        },
        process.env.JWT_SECRET
      );

      return {
        token: `JWT ${token}`,
        expires: moment.unix(expires).format(),
      };
    };

    return schema;
  }
}

const schema: Model<IUserModel> = DataAccess.mongooseConnection.model("User", UserSchema.getSchema());

export default schema;
