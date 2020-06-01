export const VolunteerFormConfig = {
  schema: {
    $schema: 'http://json-schema.org/draft-07/schema#',
    properties: {
      volunteer: {
        type: 'object',
        properties: {
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
                enum: ['', 'BAO (pour bouche à oreille)', 'établissement scolaire', 'mairie', 'référent RSA', 'internet', 'AS', 'DRE', 'éducateur', 'CCAS', 'Pôle emplo', 'Cimade', 'Autres'],
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
              birth_date: {
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
                    enum: ['Bois Blancs', 'Centre', 'Fives', 'Hellemmes', 'Lille Sud', 'Lomme', 'Moulins', 'Saint Maurice-Pellevoisin', 'Vauban Esquermes', 'Vieux Lille', 'Wazemmes', 'Autre'],
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
          familyRessources: {
            type: 'object',
            properties: {
              student: {
                type: 'boolean',
              },
              salary: {
                type: 'boolean',
              },
              internship: {
                type: 'boolean',
              },
              RSA: {
                type: 'boolean',
              },
              pre_retirement: {
                type: 'boolean',
              },
              retirement: {
                type: 'boolean',
              },
              work_name: {
                type: 'string',
              },
              school: {
                type: 'string',
              },
              certification: {
                type: 'string',
              },
              certification_futur: {
                type: 'string',
              },
              healthNumber: {
                type: 'string',
              },
              school_path: {
                type: 'string',
                enum: ['Brevet', 'Bac', 'Bac+1', 'Bac+2', 'Bac+3', 'Bac+4', 'Bac+5', 'Bac+6', 'Bac+7', 'Bac+8'],
              },
              retirement_number: {
                type: 'string',
              },
            },
          },
          lifeState: {
            type: 'object',
            properties: {
              employmentAsker: {
                type: 'boolean',
              },
              homeChildren: {
                type: 'boolean',
              },
              other: {
                type: 'boolean',
              },
              otherDetails: {
                type: 'string',
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
                  enum: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
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
          proposedSubject: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  enum: [
                    'MSB',
                    'FLE',
                    'Alpha',
                    'Français',
                    'Français langue de Scolarisation',
                    'Mathématique',
                    'Anglais',
                    'SVT',
                    'Sciences Physiques',
                    'Philosophie',
                    'S.E.S',
                    'lecture-écriture-calcul',
                    'Allemand',
                    'Espagnol',
                    'Histoire Géographie',
                  ],
                },
                type: {
                  type: 'string',
                  enum: ['Enfant', 'Ado', 'Adulte'],
                },
                level: {
                  type: 'string',
                  enum: ['Primaire', 'Collège', 'Lycée', 'Grand Débutant', 'Débutant', 'Faux Débutant', 'Intermédiare', 'Avancé'],
                },
              },
            },
          },
          workshops: {
            type: 'array',
          },
          otherIntervention: {
            type: 'string',
            enum: ['LACLE', 'DRE', 'ROUBAIX', 'LILLE SUD', 'AUTRE'],
          },
          comment: {
            type: 'string',
          },
        },
      },
    },
  },
  ui: {
    type: 'HorizontalLayout',
    elements: [
      {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Group',
            label: 'Situation',
            elements: [
              {
                type: 'HorizontalLayout',
                elements: [
                  {
                    type: 'Control',
                    label: 'Salarié',
                    scope: '#/properties/volunteer/properties/familyRessources/properties/salary',
                  },
                  {
                    type: 'Control',
                    label: 'Etudiant',
                    scope: '#/properties/volunteer/properties/familyRessources/properties/student',
                  },
                  {
                    type: 'Control',
                    label: 'Stagiare',
                    scope: '#/properties/volunteer/properties/familyRessources/properties/internship',
                  },
                  {
                    type: 'Control',
                    label: 'Pré retraité',
                    scope: '#/properties/volunteer/properties/familyRessources/properties/pre_retirement',
                  },
                  {
                    type: 'Control',
                    label: 'Rétraité',
                    scope: '#/properties/volunteer/properties/familyRessources/properties/retirement',
                  },
                  {
                    type: 'Control',
                    label: 'RSA',
                    scope: '#/properties/volunteer/properties/familyRessources/properties/RSA',
                  },
                  {
                    type: 'Control',
                    label: "Demandeur d'emploi",
                    scope: '#/properties/volunteer/properties/lifeState/properties/employmentAsker',
                  },
                  {
                    type: 'Control',
                    label: 'Avec enfant',
                    scope: '#/properties/volunteer/properties/lifeState/properties/homeChildren',
                  },
                  {
                    type: 'Control',
                    label: 'Autres',
                    scope: '#/properties/volunteer/properties/lifeState/properties/other',
                  },
                  {
                    type: 'Control',
                    label: 'Autres details',
                    scope: '#/properties/volunteer/properties/lifeState/properties/otherDetails',
                    rule: {
                      effect: 'SHOW',
                      condition: {
                        scope: '#/properties/volunteer/properties/lifeState/properties/other',
                        schema: { const: true },
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
                    label: "Description de l'emploi",
                    scope: '#/properties/volunteer/properties/familyRessources/properties/work_name',
                    rule: {
                      effect: 'SHOW',
                      condition: {
                        scope: '#/properties/volunteer/properties/familyRessources/properties/salary',
                        schema: { const: true },
                      },
                    },
                  },
                  {
                    type: 'Control',
                    label: "Description de l'emploi",
                    scope: '#/properties/volunteer/properties/familyRessources/properties/work_name',
                    rule: {
                      effect: 'SHOW',
                      condition: {
                        scope: '#/properties/volunteer/properties/familyRessources/properties/internship',
                        schema: { const: true },
                      },
                    },
                  },
                  {
                    type: 'Control',
                    label: 'Ecole',
                    scope: '#/properties/volunteer/properties/familyRessources/properties/school',
                    rule: {
                      effect: 'SHOW',
                      condition: {
                        scope: '#/properties/volunteer/properties/familyRessources/properties/student',
                        schema: { const: true },
                      },
                    },
                  },
                  {
                    type: 'Control',
                    label: 'Diplôme obtenue',
                    scope: '#/properties/volunteer/properties/familyRessources/properties/certification',
                    rule: {
                      effect: 'SHOW',
                      condition: {
                        scope: '#/properties/volunteer/properties/familyRessources/properties/salary',
                        schema: { const: true },
                      },
                    },
                  },
                  {
                    type: 'Control',
                    label: 'Diplôme envisagé',
                    scope: '#/properties/volunteer/properties/familyRessources/properties/certification_futur',
                    rule: {
                      effect: 'SHOW',
                      condition: {
                        scope: '#/properties/volunteer/properties/familyRessources/properties/student',
                        schema: { const: true },
                      },
                    },
                  },
                  {
                    type: 'Control',
                    label: "Niveau d'étude",
                    scope: '#/properties/volunteer/properties/familyRessources/properties/school_path',
                    rule: {
                      effect: 'SHOW',
                      condition: {
                        scope: '#/properties/volunteer/properties/familyRessources/properties/student',
                        schema: { const: true },
                      },
                    },
                  },
                  {
                    type: 'Control',
                    label: "Niveau d'étude",
                    scope: '#/properties/volunteer/properties/familyRessources/properties/school_path',
                    rule: {
                      effect: 'SHOW',
                      condition: {
                        scope: '#/properties/volunteer/properties/familyRessources/properties/internship',
                        schema: { const: true },
                      },
                    },
                  },
                  {
                    type: 'Control',
                    label: "Niveau d'étude",
                    scope: '#/properties/volunteer/properties/familyRessources/properties/school_path',
                    rule: {
                      effect: 'SHOW',
                      condition: {
                        scope: '#/properties/volunteer/properties/familyRessources/properties/salary',
                        schema: { const: true },
                      },
                    },
                  },
                  {
                    type: 'Control',
                    label: 'N° de carte senior',
                    scope: '#/properties/volunteer/properties/familyRessources/properties/retirement_number',
                    rule: {
                      effect: 'SHOW',
                      condition: {
                        scope: '#/properties/volunteer/properties/familyRessources/properties/retirement',
                        schema: { const: true },
                      },
                    },
                  },
                ],
              },
            ],
          },
          {
            type: 'VerticalLayout',
            elements: [
              {
                type: 'Control',
                label: 'Disponibilité',
                scope: '#/properties/volunteer/properties/availabilitiesInformation',
              },
              {
                type: 'Control',
                label: 'Matières proposées',
                scope: '#/properties/volunteer/properties/proposedSubject',
              },
              {
                type: 'Control',
                label: 'Autre intervention',
                scope: '#/properties/volunteer/properties/otherIntervention',
              },
              {
                type: 'Control',
                label: 'Commentaires sur le bénévoles',
                scope: '#/properties/volunteer/properties/comment',
              },
              {
                type: 'Control',
                label: 'Ateliers',
                scope: '#/properties/volunteer/properties/workshops',
                options: {
                  workshops: true,
                },
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
                type: 'HorizontalLayout',
                elements: [
                  {
                    type: 'Control',
                    label: 'Brouillon',
                    scope: '#/properties/volunteer/properties/draft',
                  },
                  {
                    type: 'Control',
                    label: 'Nouveau membre',
                    scope: '#/properties/volunteer/properties/registrationInformation/properties/fresh',
                  },
                ],
              },
              {
                type: 'Control',
                label: 'Date de première inscription',
                scope: '#/properties/volunteer/properties/registrationInformation/properties/first_date',
              },
              {
                type: 'Control',
                label: "Date d'inscription",
                scope: '#/properties/volunteer/properties/registrationInformation/properties/date',
                options: {},
              },
              {
                type: 'Control',
                label: 'Comment avez-vous connu LACLE ?',
                scope: '#/properties/volunteer/properties/registrationInformation/properties/know_lacle',
              },
              {
                type: 'Control',
                label: 'Autre réponse',
                scope: '#/properties/volunteer/properties/registrationInformation/properties/other_known',
                rule: {
                  effect: 'SHOW',
                  condition: {
                    scope: '#/properties/volunteer/properties/registrationInformation/properties/know_lacle',
                    schema: { enum: ['Autres'] },
                  },
                },
              },
            ],
          },
          {
            type: 'Group',
            label: 'Information générales',
            elements: [
              {
                type: 'Control',
                label: 'Nom',
                scope: '#/properties/volunteer/properties/generalInformation/properties/last_name',
              },
              {
                type: 'Control',
                label: 'Prénom',
                scope: '#/properties/volunteer/properties/generalInformation/properties/first_name',
              },
              {
                type: 'Control',
                label: 'Date de naissance',
                scope: '#/properties/volunteer/properties/generalInformation/properties/birth_date',
                options: {},
              },
              {
                type: 'Control',
                label: 'Numero de téléphone',
                scope: '#/properties/volunteer/properties/generalInformation/properties/mobile',
              },
              {
                type: 'Control',
                label: 'Email',
                scope: '#/properties/volunteer/properties/generalInformation/properties/email',
              },
              {
                type: 'Control',
                label: 'Sexe',
                scope: '#/properties/volunteer/properties/generalInformation/properties/sexe',
              },
              {
                type: 'Control',
                label: 'Numéro de sécurité social',
                scope: '#/properties/volunteer/properties/familyRessources/properties/healthNumber',
              },
              {
                type: 'Control',
                label: 'Soucis de santé',
                scope: '#/properties/volunteer/properties/generalInformation/properties/medical_elements',
              },
              {
                type: 'Control',
                label: 'Addresse',
                scope: '#/properties/volunteer/properties/generalInformation/properties/address/properties/address_description',
              },
              {
                type: 'Control',
                label: 'Ville',
                scope: '#/properties/volunteer/properties/generalInformation/properties/address/properties/city',
              },
              {
                type: 'Control',
                label: 'Code postal',
                scope: '#/properties/volunteer/properties/generalInformation/properties/address/properties/zip_code',
              },
              {
                type: 'Control',
                label: 'Quartier',
                scope: '#/properties/volunteer/properties/generalInformation/properties/address/properties/district',
              },
              {
                type: 'Control',
                label: 'Quartier Prioritaire',
                scope: '#/properties/volunteer/properties/generalInformation/properties/address/properties/district_priority',
              },
            ],
          },
        ],
      },
    ],
  },
};
