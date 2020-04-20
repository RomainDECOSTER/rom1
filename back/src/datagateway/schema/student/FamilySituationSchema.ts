import { Schema } from "mongoose";

class FamilySituation {
  static getSchema() {
    const schema: Schema = new Schema(
      {
        alone: { type: Boolean, default: false },
        couple: { type: Boolean, default: false },
        children: { type: Boolean, default: false },
      },
      {
        _id: false,
        timestamps: false,
      }
    );

    return schema;
  }
}

export default FamilySituation.getSchema();
