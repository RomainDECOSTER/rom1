import { Schema } from "mongoose";

class FamilyRessourcesSchema {
  static getSchema() {
    const schema: Schema = new Schema(
      {
        student: { type: Boolean, default: false },
        salary: { type: Boolean, default: false },
        plainTime: { type: Boolean, default: false },
        middleTime: { type: Boolean, default: false },
        ASSEDIC: { type: Boolean, default: false },
        RSA: { type: Boolean, default: false },
        ADA: { type: Boolean, default: false },
        AMASE: { type: Boolean, default: false },
        AAH: { type: Boolean, default: false },
        withoutRessources: { type: Boolean, default: false },
        pension: { type: Boolean, default: false },
        other: { type: Boolean, default: false },
        CAFNumber: { type: String },
        instructingBody: { type: String },
        obtentionDate: { type: Date },
        otherDetails: { type: String },
        referent: { type: String },
        internship: { type: Boolean },
        school: { type: String },
        healthNumber: { type: String },
        school_path: { type: String },
        certification: { type: String },
        certification_futur: { type: String },
        pre_retirement: { type: Boolean },
        retirement: { type: Boolean },
        work_name: { type: String },
        parentWork: { type: String },
        retirement_number: { type: String },
        has_children: { type: Boolean },
        CDD: { type: Boolean, default: false },
        CDI: { type: Boolean, default: false },
        INTERIM: { type: Boolean, default: false },
        help: { type: Boolean, default: false },
      },
      {
        _id: false,
        timestamps: false,
      }
    );
    return schema;
  }
}

export default FamilyRessourcesSchema.getSchema();
