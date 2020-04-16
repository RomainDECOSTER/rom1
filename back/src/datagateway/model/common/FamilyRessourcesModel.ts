import IFamilyRessourcesModel from "./IFamilyRessourcesModel";

class FamilyRessourcesModel {
  private _familyRessources: IFamilyRessourcesModel;

  constructor(familyRessources: IFamilyRessourcesModel) {
    this._familyRessources = familyRessources;
  }

  get student(): boolean {
    return this._familyRessources.student;
  }
  get salary(): boolean {
    return this._familyRessources.salary;
  }
  get plainTime(): boolean {
    return this._familyRessources.plainTime;
  }
  get middleTime(): boolean {
    return this._familyRessources.middleTime;
  }
  get ASSEDIC(): boolean {
    return this._familyRessources.ASSEDIC;
  }
  get RSA(): boolean {
    return this._familyRessources.RSA;
  }
  get ADA(): boolean {
    return this._familyRessources.ADA;
  }
  get AMASE(): boolean {
    return this._familyRessources.AMASE;
  }
  get AAH(): boolean {
    return this._familyRessources.AAH;
  }
  get withoutRessources(): boolean {
    return this._familyRessources.withoutRessources;
  }
  get pension(): boolean {
    return this._familyRessources.pension;
  }
  get other(): boolean {
    return this._familyRessources.other;
  }
  get CAFNumber(): string {
    return this._familyRessources.CAFNumber;
  }
  get instructingBody(): string {
    return this._familyRessources.instructingBody;
  }
  get obtentionDate(): Date {
    return this._familyRessources.obtentionDate;
  }
  get otherDetails(): string {
    return this._familyRessources.otherDetails;
  }
  get referent(): string {
    return this._familyRessources.referent;
  }
  get internship(): boolean {
    return this._familyRessources.internship;
  }
  get school(): string {
    return this._familyRessources.school;
  }
  get healthNumber(): string {
    return this._familyRessources.healthNumber;
  }
  get school_path(): string {
    return this._familyRessources.school_path;
  }
  get certification(): string {
    return this._familyRessources.certification;
  }
  get certification_futur(): string {
    return this._familyRessources.certification_futur;
  }
  get pre_retirement(): boolean {
    return this._familyRessources.pre_retirement;
  }
  get retirement(): boolean {
    return this._familyRessources.retirement;
  }
  get work_name(): string {
    return this._familyRessources.work_name;
  }
  get parentWork(): string {
    return this._familyRessources.parentWork;
  }
  get retirement_number(): string {
    return this._familyRessources.retirement_number;
  }
  get has_children(): boolean {
    return this._familyRessources.has_children;
  }
  get CDD(): boolean {
    return this._familyRessources.CDD;
  }
  get CDI(): boolean {
    return this._familyRessources.CDI;
  }
  get INTERIM(): boolean {
    return this._familyRessources.INTERIM;
  }
  get help(): boolean {
    return this._familyRessources.help;
  }
}

Object.seal(FamilyRessourcesModel);

export default FamilyRessourcesModel;
