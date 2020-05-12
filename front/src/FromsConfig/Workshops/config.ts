export const WorkshopsFormConfig = {
  schema: {
    type: 'object',
    properties: {
      workshop: {
        type: 'object',
        properties: {
          name: {
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
        label: 'Dénomination',
        scope: '#/properties/workshop/properties/name',
      },
    ],
  },
};
