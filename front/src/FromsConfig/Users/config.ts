import { Roles } from '../../Enum/Roles';

export const UserFormConfig = {
  schema: {
    type: 'object',
    properties: {
      user: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          username: {
            type: 'string',
          },
          email: {
            type: 'string',
            format: 'email',
          },
          password: {
            type: 'string',
          },
          confirm_password: {
            type: 'string',
          },
          roles: {
            type: 'string',
            enum: [Roles.ADMIN.value, Roles.TEAM.value, Roles.USER.value],
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
        scope: '#/properties/user/properties/name',
      },
      {
        type: 'Control',
        label: "Nom d'utilisateur",
        scope: '#/properties/user/properties/username',
      },
      {
        type: 'Control',
        label: 'Email',
        scope: '#/properties/user/properties/email',
      },
      {
        type: 'Control',
        label: 'Mot de passe',
        scope: '#/properties/user/properties/password',
        options: {
          format: 'password',
        },
      },
      {
        type: 'Control',
        label: 'Confirmation du mot de passe',
        scope: '#/properties/user/properties/confirm_password',
        options: {
          format: 'password',
        },
      },
      {
        type: 'Control',
        label: "Role de l'utilisateur",
        scope: '#/properties/user/properties/roles',
        enum: [Roles.ADMIN.value, Roles.TEAM.value, Roles.USER.value],
      },
    ],
  },
};
