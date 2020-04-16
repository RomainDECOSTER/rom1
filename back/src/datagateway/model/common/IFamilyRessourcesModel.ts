interface IFamilyRessourcesModel {
  student: boolean;
  salary: boolean;
  plainTime: boolean;
  middleTime: boolean;
  ASSEDIC: boolean;
  RSA: boolean;
  ADA: boolean;
  AMASE: boolean;
  AAH: boolean;
  withoutRessources: boolean;
  pension: boolean;
  other: boolean;
  CAFNumber: string;
  instructingBody: string;
  obtentionDate: Date;
  otherDetails: string;
  referent: string;
  internship: boolean;
  school: string;
  healthNumber: string;
  school_path: string;
  certification: string;
  certification_futur: string;
  pre_retirement: boolean;
  retirement: boolean;
  work_name: string;
  parentWork: string;
  retirement_number: string;
  has_children: boolean;
  CDD: boolean;
  CDI: boolean;
  INTERIM: boolean;
  help: boolean;
}

export default IFamilyRessourcesModel;
