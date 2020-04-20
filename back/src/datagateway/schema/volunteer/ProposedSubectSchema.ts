import { Schema } from "mongoose";

class ProposedSubectSchema {
  static getSchema() {
    const schema: Schema = new Schema(
      {
        name: { type: String },
        type: { type: String, enum: ["Enfant", "Ado", "Adulte"] },
        level: { type: String, enum: ["Primaire", "Collège", "Lycée", "Grand Débutant", "Débutant", "Faux Débutant", "Intermédiare", "Avancé", ""] },
      },
      {
        _id: false,
        timestamps: false,
      }
    );
    return schema;
  }
}

export default ProposedSubectSchema.getSchema();
