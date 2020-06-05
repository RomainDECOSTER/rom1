export const CampaignFormConfig = {
  schema: {
    type: 'object',
    properties: {
      campaign: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          description: {
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
        label: 'Nom',
        scope: '#/properties/campaign/properties/name',
      },
      {
        type: 'Control',
        label: 'Description',
        scope: '#/properties/campaign/properties/description',
      },
    ],
  },
};
