import IAddressModel from "./IAddressModel";

interface IGeneralInformationModel {
  sexe: string;
  first_name: string;
  last_name: string;
  maiden_name: string;
  birth_date: Date;
  birth_place: string;
  origin: string;
  nationality: string;
  native_language: string;
  arrival_date: string;
  mobile: string;
  redList: boolean;
  address: IAddressModel;
  email: string;
  medical_elements: string;
}

export default IGeneralInformationModel;
