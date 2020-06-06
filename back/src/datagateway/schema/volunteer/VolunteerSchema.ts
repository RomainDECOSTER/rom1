import { Schema, Model } from "mongoose";
import { RegistrationSchema, GeneralInformationSchema, FamilyRessourcesSchema, GeneralAvailabilitiesSchema } from "../common";
import ProposedSubectSchema from "./ProposedSubectSchema";
import StateSchema from "../student/StateSchema";
const DataAccess = require("../../../database/connection");
import IVolunteerModel from "../../model/volunteer/IVolunteerModel";

class VoluteerSchema {
  static getSchema() {
    const schema: Schema = new Schema(
      {
        draft: {
          type: Schema.Types.Boolean,
          required: true,
          default: true,
        },
        registrationInformation: { type: RegistrationSchema },
        generalInformation: { type: GeneralInformationSchema },
        availabilitiesInformation: [{ type: GeneralAvailabilitiesSchema }],
        proposedSubject: [{ type: ProposedSubectSchema }],
        familyRessources: FamilyRessourcesSchema,
        lifeState: StateSchema,
        workshops: [{ type: Schema.Types.ObjectId, ref: "Workshop" }],
        comment: { type: Schema.Types.String },
        otherIntervention: { type: Schema.Types.String },
        campaign: { type: Schema.Types.ObjectId, ref: "Campaign" },
        campaign_history: [{ type: Schema.Types.Mixed, default: [] }],
      },
      {
        timestamps: true,
      }
    );
    return schema;
  }
}

const volunteerSchema: Model<IVolunteerModel> = DataAccess.mongooseConnection.model("Volunteer", VoluteerSchema.getSchema());

export default volunteerSchema;
