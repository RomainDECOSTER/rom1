import { Schema, Model } from "mongoose";
import { RegistrationSchema, GeneralInformationSchema, FamilyRessourcesSchema, GeneralAvailabilitiesSchema } from "../common";
import ProposedSubectSchema from "./ProposedSubectSchema";
import StateSchema from "../student/StateSchema";
import DataAccess = require("../../../database/connection");
import IVolunteerModel from "../../model/volunteer/IVolunteerModel";

class VoluteerSchema {
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
        proposedSubject: { type: [ProposedSubectSchema] },
        familyRessources: FamilyRessourcesSchema,
        lifeState: StateSchema,
        workshops: [{ type: Schema.Types.ObjectId, ref: "workshops" }],
        comment: { type: String },
        otherIntervention: { type: String },
      },
      {
        timestamps: true,
      }
    );
    return schema;
  }
}

const schema: Model<IVolunteerModel> = DataAccess.mongooseConnection.model("Volunteer", VoluteerSchema.getSchema());

export default schema;
