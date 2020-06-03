import { Schema, Model } from "mongoose";

import ICampaignModel from "../model/ICampaignModel";

const DataAccess = require("../../database/connection");

class CampaignSchema {
  static getSchema() {
    const schema: Schema = new Schema(
      {
        name: { type: Schema.Types.String },
        description: { type: Schema.Types.String },
      },
      { timestamps: true }
    );
    return schema;
  }
}

const schema: Model<ICampaignModel> = DataAccess.mongooseConnection.model("Campaign", CampaignSchema.getSchema());

export default schema;
