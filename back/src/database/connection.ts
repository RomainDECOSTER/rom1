import * as mongosse from "mongoose";

import config from "../config/application";

// const lacle_connection = mongosse.createConnection(connectionUri, { useNewUrlParser: true, useUnifiedTopology: true }).catch((err) => {
//   if (err.message.indexOf("ECONNREFUSED") !== -1) {
//     console.error("Error: The server was not able to reach MongoDB. Maybe it's not running?");
//     process.exit(1);
//   } else {
//     throw err;
//   }
// });

class DataAccess {
  static mongooseInstance: any;
  static mongooseConnection: mongosse.Connection;

  constructor() {
    DataAccess.connect();
  }

  static connect(): mongosse.Connection {
    const connectionUri = `${config.mongodb.DB_PROTOCOL}${config.mongodb.DB_USER}:${config.mongodb.DB_PASS}@${config.mongodb.DB_HOST}:${config.mongodb.DB_PORT}/${config.mongodb.DB_NAME}`;
    if (this.mongooseInstance) {
      return this.mongooseInstance;
    }

    this.mongooseConnection = mongosse.connection;
    this.mongooseConnection.once("open", () => {
      console.log("Connection to mongodb.");
    });

    this.mongooseInstance = mongosse.connect(connectionUri, { useNewUrlParser: true, useUnifiedTopology: true });
    return this.mongooseInstance;
  }
}

DataAccess.connect();
export = DataAccess;
