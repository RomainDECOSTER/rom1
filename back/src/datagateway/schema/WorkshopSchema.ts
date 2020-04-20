import { Schema, Model } from "mongoose";
import IWorkshopModel from "../model/IWorkshopModel";
import DataAccess = require("../../database/connection");

class WorkshopSchema {
  static getSchema() {
    const schema: Schema = new Schema(
      {
        name: { type: Schema.Types.String },
      },
      {
        timestamps: true,
      }
    );
    return schema;
  }
}

const schema: Model<IWorkshopModel> = DataAccess.mongooseConnection.model("Workshop", WorkshopSchema.getSchema());

export default schema;
