import * as mongosse from "mongoose";

import config from "../config/application";
import { logging } from "../tools/logger/LoggerManager";

const logger = logging.getLogger("database.connection");

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
      logger.info("Connection mongodb done");
    });

    this.mongooseInstance = mongosse.connect(connectionUri, { useNewUrlParser: true, useUnifiedTopology: true });
    return this.mongooseInstance;
  }
}

DataAccess.connect();
export = DataAccess;
