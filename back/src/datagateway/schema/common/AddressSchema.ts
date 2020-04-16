import { Schema } from "mongoose";

class AddressSchema {
  static getSchema() {
    const schema: Schema = new Schema(
      {
        address_description: { type: String },
        district: { type: String },
        city: { type: String },
        zip_code: { type: String },
        district_priority: { type: Boolean },
      },
      {
        timestamps: false,
        _id: false,
      }
    );

    return schema;
  }
}

export default AddressSchema.getSchema();
