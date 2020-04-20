import { Schema } from "mongoose";

class SocialMediation {
  static getSchema() {
    const schema: Schema = new Schema(
      {
        active: { type: Boolean },
        details: { type: String },
      },
      {
        _id: false,
        timestamps: false,
      }
    );
    return schema;
  }
}

export default SocialMediation.getSchema();
