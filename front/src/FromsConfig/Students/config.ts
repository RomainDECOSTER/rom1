export const StudentFromConfig = {
  schema: {
    $schema: 'http://json-schema.org/draft-07/schema#',
    properties: {
      student: {
        type: 'object',
        properties: {
          type: {
            type: 'string',
            enum: ['AS', 'FLE', 'MSB', 'AA'],
          },
          draft: {
            type: 'boolean',
          },
          registrationInformation: {
            type: 'object',
            properties: {
              fresh: {
                type: 'boolean',
                default: true,
              },
              date: {
                type: 'string',
                format: 'date',
              },
              first_date: {
                type: 'string',
                format: 'date',
              },
              know_lacle: {
                type: 'string',
                enum: [
                  '',
                  'BAO (pour bouche à oreille)',
                  'établissement scolaire',
                  'mairie',
                  'référent RSA',
                  'internet',
                  'AS',
                  'DRE',
                  'éducateur',
                  'CCAS',
                  'Pôle emplo',
                  'Cimade',
                  'Autres',
                  'Partenaire',
                ],
              },
              other_known: {
                type: 'string',
              },
            },
          },
          generalInformation: {
            type: 'object',
            properties: {
              first_name: {
                type: 'string',
              },
              last_name: {
                type: 'string',
              },
              maiden_name: {
                type: 'string',
              },
              birth_date: {
                type: 'string',
                format: 'date',
              },
              birth_place: {
                type: 'string',
              },
              origin: {
                type: 'string',
              },
              nationality: {
                type: 'string',
              },
              native_language: {
                type: 'string',
              },
              arrival_date: {
                type: 'string',
                format: 'date',
              },
              mobile: {
                type: 'string',
              },
              email: {
                type: 'string',
                format: 'email',
              },
              sexe: {
                type: 'string',
                enum: ['M', 'F'],
              },
              medical_elements: {
                type: 'string',
              },
              address: {
                type: 'object',
                properties: {
                  address_description: {
                    type: 'string',
                  },
                  district: {
                    type: 'string',
                    enum: ['Bois Blancs', 'Centre', 'Fives', 'Hellemmes', 'Lille Sud', 'Lomme', 'Moulins', 'Saint Maurice-Pellevoisin', 'Vauban Esquermes', 'Vieux Lille', 'Wazemmes', 'Autres'],
                  },
                  city: {
                    type: 'string',
                  },
                  zip_code: {
                    type: 'string',
                  },
                  district_priority: {
                    type: 'boolean',
                  },
                },
              },
            },
          },
          availabilitiesInformation: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                day: {
                  type: 'string',
                  enum: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
                },
                hours: {
                  type: 'array',
                  items: {
                    type: 'string',
                    format: 'time',
                  },
                },
              },
            },
          },
          familySituation: {
            type: 'object',
            properties: {
              alone: {
                type: 'boolean',
              },
              couple: {
                type: 'boolean',
              },
              children: {
                type: 'boolean',
              },
            },
          },
          familyRessources: {
            type: 'object',
            properties: {
              student: {
                type: 'boolean',
              },
              salary: {
                type: 'boolean',
              },
              plainTime: {
                type: 'boolean',
              },
              middleTime: {
                type: 'boolean',
              },
              ASSEDIC: {
                type: 'boolean',
              },
              RSA: {
                type: 'boolean',
              },
              ADA: {
                type: 'boolean',
              },
              AMASE: {
                type: 'boolean',
              },
              AAH: {
                type: 'boolean',
              },
              withoutRssources: {
                type: 'boolean',
              },
              pension: {
                type: 'boolean',
              },
              other: {
                type: 'boolean',
              },
              CDD: {
                type: 'boolean',
              },
              CDI: {
                type: 'boolean',
              },
              INTERIM: {
                type: 'boolean',
              },
              help: {
                type: 'boolean',
              },
              CAFNumber: {
                type: 'string',
              },
              instructingBody: {
                type: 'string',
              },
              obtentionDate: {
                type: 'string',
                format: 'date',
              },
              otherDetails: {
                type: 'string',
              },
              referent: {
                type: 'string',
              },
              parentWork: {
                type: 'string',
              },
            },
          },
          lifeState: {
            type: 'object',
            properties: {
              salary: {
                type: 'boolean',
              },
              plainTime: {
                type: 'boolean',
              },
              middleTime: {
                type: 'boolean',
              },
              CDD: {
                type: 'boolean',
              },
              CDI: {
                type: 'boolean',
              },
              INTERIM: {
                type: 'boolean',
              },
              help: {
                type: 'boolean',
              },
              employmentAsker: {
                type: 'boolean',
              },
              homeChildren: {
                type: 'boolean',
              },
              countryAsker: {
                type: 'boolean',
              },
              home: {
                type: 'boolean',
              },
              AAH: {
                type: 'boolean',
              },
              ESAT: {
                type: 'boolean',
              },
              youngAlone: {
                type: 'boolean',
              },
              other: {
                type: 'boolean',
              },
              ESATDetails: {
                type: 'string',
              },
              employmentAskerDate: {
                type: 'string',
                format: 'date',
              },
              ortherDetails: {
                type: 'string',
              },
              comment: {
                type: 'string',
              },
              RSA: {
                type: 'boolean',
              },
            },
          },
          socialMediation: {
            type: 'object',
            properties: {
              active: {
                type: 'boolean',
              },
              details: {
                type: 'string',
              },
            },
          },
          initial_level: {
            type: 'string',
            enum: ['A1.1', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'RAN', 'ET1', 'ET2', 'ET3'],
          },
          final_level: {
            type: 'string',
            enum: ['', 'A1.1', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'RAN', 'ET1', 'ET2', 'ET3'],
          },
          certification: {
            type: 'string',
            enum: ['', 'TCF', 'DILF', 'DELF', 'CFG', 'A1', 'A2', 'B1', 'B2'],
          },
          certification_final: {
            type: 'string',
            enum: ['', 'TCF', 'DILF', 'DELF', 'CFG', 'A1', 'A2', 'B1', 'B2'],
          },
          school_path: {
            type: 'string',
          },
          trainning: {
            type: 'string',
          },
          MIFE: {
            type: 'string',
            enum: ['V bis', 'V', 'VI', 'VI bis', 'VII', 'VII bis', 'I', 'II', 'III', 'IV'],
          },
          levelComment: {
            type: 'string',
          },
          schoolComment: {
            type: 'string',
          },
          comment: {
            type: 'string',
          },
          schoolName: {
            type: 'string',
          },
          workshopsComment: {
            type: 'string',
          },
          level: {
            type: 'string',
            enum: ['primaire', 'collège', 'lycée'],
          },
          option1: {
            type: 'string',
            enum: [
              'Arts',
              'Écologie, agronomie et territoires',
              'Histoire géographie, géopolitique et sciences politiques',
              'Humanités, littérature et philosophie',
              'Langues et littératures étrangères',
              'Mathématiques',
              'Numérique et sciences informatiques',
              'SVT (sciences de la vie et de la terre)',
              'Sciences de l’ingénieur',
              'Sciences économiques et sociales',
              'Physique chimie',
              'LCA (langues et culture de l’antiquité)',
              'EPS (éducation physique et sportive)',
              'LV3 (langue vivante 3)',
              'Mathématiques expertes (en terminale)',
              'Mathématiques complémentaires en terminale)',
              'Droit et grands enjeux dans le monde contemporain (en terminale)',
            ],
          },
          option2: {
            type: 'string',
            enum: [
              'Arts',
              'Écologie, agronomie et territoires',
              'Histoire géographie, géopolitique et sciences politiques',
              'Humanités, littérature et philosophie',
              'Langues et littératures étrangères',
              'Mathématiques',
              'Numérique et sciences informatiques',
              'SVT (sciences de la vie et de la terre)',
              'Sciences de l’ingénieur',
              'Sciences économiques et sociales',
              'Physique chimie',
              'LCA (langues et culture de l’antiquité)',
              'EPS (éducation physique et sportive)',
              'LV3 (langue vivante 3)',
              'Mathématiques expertes (en terminale)',
              'Mathématiques complémentaires en terminale)',
              'Droit et grands enjeux dans le monde contemporain (en terminale)',
            ],
          },
          option3: {
            type: 'string',
            enum: [
              'Arts',
              'Écologie, agronomie et territoires',
              'Histoire géographie, géopolitique et sciences politiques',
              'Humanités, littérature et philosophie',
              'Langues et littératures étrangères',
              'Mathématiques',
              'Numérique et sciences informatiques',
              'SVT (sciences de la vie et de la terre)',
              'Sciences de l’ingénieur',
              'Sciences économiques et sociales',
              'Physique chimie',
              'LCA (langues et culture de l’antiquité)',
              'EPS (éducation physique et sportive)',
              'LV3 (langue vivante 3)',
              'Mathématiques expertes (en terminale)',
              'Mathématiques complémentaires en terminale)',
              'Droit et grands enjeux dans le monde contemporain (en terminale)',
            ],
          },
          workshops: {
            type: 'array',
          },
          classRoom: {
            type: 'array',
            items: {
              type: 'string',
              enum: ['grande section', 'CP', 'CE1', 'CE2', 'CM1', 'CM2', 'ULIS', '6ème', '5ème', '4ème', '3ème', 'SEGPA', '2nde', '1ère', 'terminale', 'pro'],
            },
          },
          courses_as: {
            type: 'array',
            items: {
              type: 'string',
              enum: [
                'Français',
                'Français Langue de Scolarisation',
                'Mathématiques',
                'Anglais',
                'SVT',
                'Sciences Physiques',
                'Philosophie',
                'S.E.S',
                'lecture-écriture-calcul',
                'Allemand',
                'Espagnol',
                'Histoire géographie',
              ],
            },
          },
          training: {
            type: 'string',
          },
          campaign: {
            type: 'string',
          },
        },
      },
    },
  },
  ui: {
    type: 'VerticalLayout',
    elements: [
      {
        type: 'Control',
        label: "Type d'apprenant",
        scope: '#/properties/student/properties/type',
      },
      {
        type: 'HorizontalLayout',
        elements: [
          {
            type: 'VerticalLayout',
            elements: [
              {
                type: 'Group',
                label: 'Information générales',
                elements: [
                  {
                    type: 'Control',
                    label: 'Nom',
                    scope: '#/properties/student/properties/generalInformation/properties/last_name',
                  },
                  {
                    type: 'Control',
                    label: 'Prénom',
                    scope: '#/properties/student/properties/generalInformation/properties/first_name',
                  },
                  {
                    type: 'Control',
                    label: 'Nom de jeune fille',
                    scope: '#/properties/student/properties/generalInformation/properties/maiden_name',
                    rule: {
                      effect: 'HIDE',
                      condition: {
                        scope: '#/properties/student/properties/type',
                        schema: { const: 'AS' },
                      },
                    },
                  },
                  {
                    type: 'Control',
                    label: 'Sexe',
                    scope: '#/properties/student/properties/generalInformation/properties/sexe',
                  },
                  {
                    type: 'Control',
                    label: 'Date de naissance',
                    scope: '#/properties/student/properties/generalInformation/properties/birth_date',
                    options: {},
                  },
                  {
                    type: 'Control',
                    label: 'Lieu de naissance',
                    scope: '#/properties/student/properties/generalInformation/properties/birth_place',
                    options: {},
                  },
                  {
                    type: 'Control',
                    label: 'Origine',
                    scope: '#/properties/student/properties/generalInformation/properties/origin',
                    options: {},
                  },
                  {
                    type: 'Control',
                    label: 'Nationalité',
                    scope: '#/properties/student/properties/generalInformation/properties/nationality',
                    options: {},
                  },
                  {
                    type: 'Control',
                    label: 'Langue première',
                    scope: '#/properties/student/properties/generalInformation/properties/native_language',
                    options: {},
                  },
                  {
                    type: 'Control',
                    label: "Date d'arrivé",
                    scope: '#/properties/student/properties/generalInformation/properties/arrival_date',
                    options: {},
                  },
                  {
                    type: 'Control',
                    label: 'Numero de téléphone',
                    scope: '#/properties/student/properties/generalInformation/properties/mobile',
                  },
                  {
                    type: 'Control',
                    label: 'Email',
                    scope: '#/properties/student/properties/generalInformation/properties/email',
                  },
                  {
                    type: 'Control',
                    label: 'Soucis de santé',
                    scope: '#/properties/student/properties/generalInformation/properties/medical_elements',
                  },
                  {
                    type: 'Control',
                    label: 'Addresse',
                    scope: '#/properties/student/properties/generalInformation/properties/address/properties/address_description',
                  },
                  {
                    type: 'Control',
                    label: 'Ville',
                    scope: '#/properties/student/properties/generalInformation/properties/address/properties/city',
                  },
                  {
                    type: 'Control',
                    label: 'Code postal',
                    scope: '#/properties/student/properties/generalInformation/properties/address/properties/zip_code',
                  },
                  {
                    type: 'Control',
                    label: 'Quartier',
                    scope: '#/properties/student/properties/generalInformation/properties/address/properties/district',
                  },
                  {
                    type: 'Control',
                    label: 'Quartier Prioritaire',
                    scope: '#/properties/student/properties/generalInformation/properties/address/properties/district_priority',
                  },
                ],
              },
              {
                type: 'Group',
                label: 'Situation familliale',
                elements: [
                  {
                    type: 'HorizontalLayout',
                    elements: [
                      {
                        type: 'Control',
                        label: 'Personne seule',
                        scope: '#/properties/student/properties/familySituation/properties/alone',
                      },
                      {
                        type: 'Control',
                        label: 'Personne en couple',
                        scope: '#/properties/student/properties/familySituation/properties/couple',
                      },
                      {
                        type: 'Control',
                        label: 'Avec enfants',
                        scope: '#/properties/student/properties/familySituation/properties/children',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'Group',
                label: "Status de l'apprenant",
                elements: [
                  {
                    type: 'HorizontalLayout',
                    elements: [
                      {
                        type: 'Control',
                        label: 'Salarié',
                        scope: '#/properties/student/properties/lifeState/properties/salary',
                      },
                      {
                        type: 'Control',
                        label: 'Temps plein',
                        scope: '#/properties/student/properties/lifeState/properties/plainTime',
                      },
                      {
                        type: 'Control',
                        label: 'Temps partiel',
                        scope: '#/properties/student/properties/lifeState/properties/middleTime',
                      },
                      {
                        type: 'Control',
                        label: 'CDD',
                        scope: '#/properties/student/properties/lifeState/properties/CDD',
                      },
                      {
                        type: 'Control',
                        label: 'CDI',
                        scope: '#/properties/student/properties/lifeState/properties/CDI',
                      },
                      {
                        type: 'Control',
                        label: 'INTERIM',
                        scope: '#/properties/student/properties/lifeState/properties/INTERIM',
                      },
                      {
                        type: 'Control',
                        label: 'aidé',
                        scope: '#/properties/student/properties/lifeState/properties/help',
                      },
                      {
                        type: 'Control',
                        label: "Demandeur D'emploi",
                        scope: '#/properties/student/properties/lifeState/properties/employmentAsker',
                      },
                      {
                        type: 'Control',
                        label: 'Enfant au foyer',
                        scope: '#/properties/student/properties/lifeState/properties/homeChildren',
                        rule: {
                          effect: 'SHOW',
                          condition: {
                            scope: '#/properties/student/properties/type',
                            schema: { const: 'AS' },
                          },
                        },
                      },
                      {
                        type: 'Control',
                        label: "Demandeur d'asile",
                        scope: '#/properties/student/properties/lifeState/properties/countryAsker',
                      },
                      {
                        type: 'Control',
                        label: 'Au foyer',
                        scope: '#/properties/student/properties/lifeState/properties/home',
                      },
                      {
                        type: 'Control',
                        label: 'AAH',
                        scope: '#/properties/student/properties/lifeState/properties/AAH',
                      },
                      {
                        type: 'Control',
                        label: 'ESAT',
                        scope: '#/properties/student/properties/lifeState/properties/ESAT',
                      },
                      {
                        type: 'Control',
                        label: 'Jeune isolé',
                        scope: '#/properties/student/properties/lifeState/properties/youngAlone',
                      },
                      {
                        type: 'Control',
                        label: 'RSA',
                        scope: '#/properties/student/properties/lifeState/properties/RSA',
                        rule: {
                          effect: 'SHOW',
                          condition: {
                            scope: '#/properties/student/properties/type',
                            schema: { const: 'AS' },
                          },
                        },
                      },
                    ],
                  },
                  {
                    type: 'VerticalLayout',
                    elements: [
                      {
                        type: 'Control',
                        label: 'ESAT détails',
                        scope: '#/properties/student/properties/lifeState/properties/ESATDetails',
                      },
                      {
                        type: 'Control',
                        label: 'Autres détails',
                        scope: '#/properties/student/properties/lifeState/properties/ortherDetails',
                      },
                      {
                        type: 'Control',
                        label: "Date d'inscription à pole emploi",
                        scope: '#/properties/student/properties/lifeState/properties/employmentAskerDate',
                      },
                      {
                        type: 'Control',
                        label: 'Commentaire',
                        scope: '#/properties/student/properties/lifeState/properties/comment',
                        rule: {
                          effect: 'HIDE',
                          condition: {
                            scope: '#/properties/student/properties/type',
                            schema: { const: 'AS' },
                          },
                        },
                      },
                    ],
                  },
                ],
              },
              {
                type: 'Group',
                label: 'Méiation sociale',
                elements: [
                  {
                    type: 'VerticalLayout',
                    elements: [
                      {
                        type: 'Control',
                        label: 'Activé',
                        scope: '#/properties/student/properties/socialMediation/properties/active',
                      },
                      {
                        type: 'Control',
                        label: 'Détails',
                        scope: '#/properties/student/properties/socialMediation/properties/details',
                        rule: {
                          effect: 'SHOW',
                          condition: {
                            scope: '#/properties/student/properties/socialMediation/properties/active',
                            schema: { const: true },
                          },
                        },
                      },
                    ],
                  },
                ],
              },
              {
                type: 'Group',
                label: "Niveau de l'apprenant",
                rule: {
                  effect: 'HIDE',
                  condition: {
                    scope: '#/properties/student/properties/type',
                    schema: { const: 'AS' },
                  },
                },
                elements: [
                  {
                    type: 'VerticalLayout',
                    elements: [
                      {
                        type: 'Control',
                        label: 'Niveau initial',
                        scope: '#/properties/student/properties/initial_level',
                      },
                      {
                        type: 'Control',
                        label: 'Niveau final',
                        scope: '#/properties/student/properties/final_level',
                      },
                      {
                        type: 'Control',
                        label: 'MIFE',
                        scope: '#/properties/student/properties/MIFE',
                      },
                      {
                        type: 'Control',
                        label: 'Certification envisagée',
                        scope: '#/properties/student/properties/certification',
                      },
                      {
                        type: 'Control',
                        label: 'Certification obtenue',
                        scope: '#/properties/student/properties/certification_final',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'Group',
                label: "Niveau de l'apprenant",
                rule: {
                  effect: 'SHOW',
                  condition: {
                    scope: '#/properties/student/properties/type',
                    schema: { const: 'AS' },
                  },
                },
                elements: [
                  {
                    type: 'VerticalLayout',
                    elements: [
                      {
                        type: 'Control',
                        label: 'Niveau',
                        scope: '#/properties/student/properties/level',
                      },
                      {
                        type: 'Control',
                        label: 'Class',
                        scope: '#/properties/student/properties/classRoom',
                      },
                      {
                        type: 'Control',
                        label: 'Option1',
                        scope: '#/properties/student/properties/option1',
                        rule: {
                          effect: 'SHOW',
                          condition: {
                            scope: '#/properties/student/properties/level',
                            schema: { const: 'lycée' },
                          },
                        },
                      },
                      {
                        type: 'Control',
                        label: 'Option2',
                        scope: '#/properties/student/properties/option2',
                        rule: {
                          effect: 'SHOW',
                          condition: {
                            scope: '#/properties/student/properties/level',
                            schema: { const: 'lycée' },
                          },
                        },
                      },
                      {
                        type: 'Control',
                        label: 'Option3',
                        scope: '#/properties/student/properties/option3',
                        rule: {
                          effect: 'SHOW',
                          condition: {
                            scope: '#/properties/student/properties/level',
                            schema: { const: 'lycée' },
                          },
                        },
                      },
                      {
                        type: 'Control',
                        label: "Nom de l'établissement",
                        scope: '#/properties/student/properties/schoolName',
                      },
                      {
                        type: 'Control',
                        label: "Commentaire sur l'établissement",
                        scope: '#/properties/student/properties/schoolComment',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'VerticalLayout',
            elements: [
              {
                type: 'Group',
                label: "Information d'inscription",
                elements: [
                  {
                    type: 'Control',
                    label: 'Campagne',
                    scope: '#/properties/student/properties/campaign',
                    options: {
                      campaign: true,
                    },
                  },
                  {
                    type: 'HorizontalLayout',
                    elements: [
                      {
                        type: 'Control',
                        label: 'Brouillon',
                        scope: '#/properties/student/properties/draft',
                      },
                      {
                        type: 'Control',
                        label: 'Nouveau membre',
                        scope: '#/properties/student/properties/registrationInformation/properties/fresh',
                      },
                    ],
                  },
                  {
                    type: 'Control',
                    label: 'Date de première inscription',
                    scope: '#/properties/student/properties/registrationInformation/properties/first_date',
                  },
                  {
                    type: 'Control',
                    label: "Date d'inscription",
                    scope: '#/properties/student/properties/registrationInformation/properties/date',
                    options: {},
                  },
                  {
                    type: 'Control',
                    label: 'Comment avez-vous connu LACLE ?',
                    scope: '#/properties/student/properties/registrationInformation/properties/know_lacle',
                  },
                  {
                    type: 'Control',
                    label: 'Autre réponse',
                    scope: '#/properties/student/properties/registrationInformation/properties/other_known',
                    rule: {
                      effect: 'SHOW',
                      condition: {
                        scope: '#/properties/student/properties/registrationInformation/properties/know_lacle',
                        schema: { enum: ['Autres'] },
                      },
                    },
                  },
                ],
              },
              {
                type: 'VerticalLayout',
                elements: [
                  {
                    type: 'Group',
                    elements: [
                      {
                        type: 'Control',
                        label: 'Disponibilité',
                        scope: '#/properties/student/properties/availabilitiesInformation',
                      },
                    ],
                  },
                  {
                    type: 'Group',
                    label: 'Ressources familliale',
                    elements: [
                      {
                        type: 'HorizontalLayout',
                        elements: [
                          {
                            type: 'Control',
                            label: 'Étudiant',
                            scope: '#/properties/student/properties/familyRessources/properties/student',
                          },
                          {
                            type: 'Control',
                            label: 'Employé',
                            scope: '#/properties/student/properties/familyRessources/properties/salary',
                          },
                          {
                            type: 'Control',
                            label: 'Temps plein',
                            scope: '#/properties/student/properties/familyRessources/properties/plainTime',
                          },
                          {
                            type: 'Control',
                            label: 'Temps partiel',
                            scope: '#/properties/student/properties/familyRessources/properties/middleTime',
                          },
                          {
                            type: 'Control',
                            label: 'ASSEDIC',
                            scope: '#/properties/student/properties/familyRessources/properties/ASSEDIC',
                          },
                          {
                            type: 'Control',
                            label: 'RSA',
                            scope: '#/properties/student/properties/familyRessources/properties/RSA',
                          },
                          {
                            type: 'Control',
                            label: 'ADA',
                            scope: '#/properties/student/properties/familyRessources/properties/ADA',
                          },
                          {
                            type: 'Control',
                            label: 'AMASE',
                            scope: '#/properties/student/properties/familyRessources/properties/AMASE',
                          },
                          {
                            type: 'Control',
                            label: 'AAH',
                            scope: '#/properties/student/properties/familyRessources/properties/AAH',
                          },
                          {
                            type: 'Control',
                            label: 'Sans ressources',
                            scope: '#/properties/student/properties/familyRessources/properties/withoutRssources',
                          },
                          {
                            type: 'Control',
                            label: 'Retraité',
                            scope: '#/properties/student/properties/familyRessources/properties/pension',
                          },
                          {
                            type: 'Control',
                            label: 'Autre',
                            scope: '#/properties/student/properties/familyRessources/properties/other',
                          },
                          {
                            type: 'Control',
                            label: 'CDD',
                            scope: '#/properties/student/properties/familyRessources/properties/CDD',
                          },
                          {
                            type: 'Control',
                            label: 'CDI',
                            scope: '#/properties/student/properties/familyRessources/properties/CDI',
                          },
                          {
                            type: 'Control',
                            label: 'INTERIM',
                            scope: '#/properties/student/properties/familyRessources/properties/INTERIM',
                          },
                          {
                            type: 'Control',
                            label: 'Aidé',
                            scope: '#/properties/student/properties/familyRessources/properties/help',
                          },
                        ],
                      },
                      {
                        type: 'VerticalLayout',
                        elements: [
                          {
                            type: 'Control',
                            label: 'N° CAF',
                            scope: '#/properties/student/properties/familyRessources/properties/CAFNumber',
                          },
                          {
                            type: 'Control',
                            label: "Date d'otention",
                            scope: '#/properties/student/properties/familyRessources/properties/obtentionDate',
                          },
                          {
                            type: 'Control',
                            label: 'Orga. instructeur',
                            scope: '#/properties/student/properties/familyRessources/properties/instructingBody',
                          },
                          {
                            type: 'Control',
                            label: 'Réferent',
                            scope: '#/properties/student/properties/familyRessources/properties/referent',
                          },
                          {
                            type: 'Control',
                            label: 'Autres détails',
                            scope: '#/properties/student/properties/familyRessources/properties/otherDetails',
                          },
                          {
                            type: 'Control',
                            label: 'Profession des parents',
                            scope: '#/properties/student/properties/familyRessources/properties/parentWork',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'Group',
                    elements: [
                      {
                        type: 'Control',
                        label: 'Ateliers',
                        scope: '#/properties/student/properties/workshops',
                        options: {
                          workshops: true,
                        },
                      },
                      {
                        type: 'Control',
                        label: "Commentaire sur l'atelier",
                        scope: '#/properties/student/properties/workshopsComment',
                      },
                    ],
                  },
                  {
                    type: 'Group',
                    elements: [
                      {
                        type: 'VerticalLayout',
                        elements: [
                          {
                            type: 'Control',
                            label: 'Parcours scolaire',
                            scope: '#/properties/student/properties/school_path',
                          },
                          {
                            type: 'Control',
                            label: 'Formations',
                            scope: '#/properties/student/properties/training',
                            rule: {
                              effect: 'HIDE',
                              condition: {
                                scope: '#properties/student/propertiers/type',
                                schema: { const: 'AS' },
                              },
                            },
                          },
                          {
                            type: 'Control',
                            label: 'Matière',
                            scope: '#/properties/student/properties/courses_as',
                            rule: {
                              effect: 'SHOW',
                              condition: {
                                scope: '#properties/student/propertiers/type',
                                schema: { const: 'AS' },
                              },
                            },
                          },
                          {
                            type: 'Control',
                            label: "Commentaire sur l'apprenant",
                            scope: '#/properties/student/properties/comment',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
