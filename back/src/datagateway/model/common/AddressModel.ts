import IAddressModel from "./IAddressModel";

class AddressModel {
  private _address: IAddressModel;

  constructor(addressModel: IAddressModel) {
    this._address = addressModel;
  }

  get address_description(): string {
    return this._address.address_description;
  }
  get district(): string {
    return this._address.district;
  }
  get city(): string {
    return this._address.city;
  }
  get zip_code(): string {
    return this._address.zip_code;
  }
  get district_priority(): boolean {
    return this._address.district_priority;
  }
}

Object.seal(AddressModel);

export default AddressModel;
