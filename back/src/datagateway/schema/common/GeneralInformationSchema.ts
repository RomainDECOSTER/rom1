import { Schema } from "mongoose";

import AddressSchema from "./AddressSchema";

class GeneralInformationSchema {
  static getSchema() {
    const schema: Schema = new Schema(
      {
        sexe: { type: String, enum: ["M", "F", "Undefined"] },
        first_name: { type: String, index: true },
        last_name: { type: String, index: true },
        maiden_name: { type: String },
        birth_date: { type: Date },
        birth_place: { type: String },
        origin: { type: String },
        nationality: { type: String },
        native_language: { type: String },
        arrival_date: { type: String },
        mobile: { type: String },
        redList: { type: Boolean, default: true },
        address: AddressSchema,
        email: { type: String },
        medical_elements: { type: String },
      },
      {
        _id: false,
      }
    );
    return schema;
  }
}

export default GeneralInformationSchema.getSchema();
