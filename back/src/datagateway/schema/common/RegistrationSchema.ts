import { Schema } from "mongoose";

class RegistrationSchema {
  static getSchema() {
    const schema: Schema = new Schema(
      {
        date: { type: Date },
        number: { type: Number },
        fresh: { type: Boolean },
        first_date: { type: Date },
        know_lacle: { type: String },
        other_known: { type: String },
      },
      {
        _id: false,
      }
    );
    return schema;
  }
}

export default RegistrationSchema.getSchema();
