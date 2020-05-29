import { Schema, Model } from "mongoose";

import { GeneralAvailabilitiesSchema, FamilyRessourcesSchema, GeneralInformationSchema, RegistrationSchema } from "../common";
import FamilySituationSchema from "./FamilySituationSchema";
import SocialMediationSchema from "./SocialMediationSchema";
import StateSchema from "./StateSchema";
import DataAccess = require("../../../database/connection");
import IStudentModel from "../../model/student/IStudentModel";

class StudentSchema {
  static getSchema() {
    const schema: Schema = new Schema(
      {
        draft: {
          type: Boolean,
          required: true,
          default: true,
        },
        registrationInformation: { type: RegistrationSchema },
        generalInformation: { type: GeneralInformationSchema },
        availabilitiesInformation: { type: [GeneralAvailabilitiesSchema] },
        type: { type: String, enum: ["AS", "FLE", "MSB", "AA"], required: true },
        familySituation: FamilySituationSchema,
        familyRessources: FamilyRessourcesSchema,
        lifeState: StateSchema,
        socialMediation: SocialMediationSchema,
        workshops: [{ type: Schema.Types.ObjectId, ref: "Workshop" }],
        initial_level: { type: String },
        final_level: { type: String },
        certification: { type: String },
        school_path: { type: String },
        trainning: { type: String },
        courses_as: [{ type: String }],
        MIFE: { type: String },
        levelComment: { type: String },
        comment: { type: String },
        schoolComment: { type: String },
        schoolName: { type: String },
        certification_final: { type: String },
        workshopsComment: { type: String },
        level: { type: String },
        classRoom: [{ type: String }],
        option1: { type: String },
        option2: { type: String },
        option3: { type: String },
      },
      {
        timestamps: true,
      }
    );
    return schema;
  }
}

const schema: Model<IStudentModel> = DataAccess.mongooseConnection.model("Student", StudentSchema.getSchema());

export default schema;
