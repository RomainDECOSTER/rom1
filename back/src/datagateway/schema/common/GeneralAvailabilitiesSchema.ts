import { Schema } from "mongoose";

class GeneralAvailabilitiesSchema {
  static getSchema() {
    const schema: Schema = new Schema(
      {
        day: { type: String },
        hours: { type: Array },
      },
      {
        _id: false,
        timestamps: false,
      }
    );
    return schema;
  }
}

export default GeneralAvailabilitiesSchema.getSchema();
