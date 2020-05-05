interface RolesType {
  ADMIN: {
    label: string;
    value: string;
  };
  TEAM: {
    label: string;
    value: string;
  };
  USER: {
    label: string;
    value: string;
  };
  HOME: {
    label: string;
    value: string;
  };
}

export const Roles: RolesType = {
  ADMIN: {
    label: 'Administrateur',
    value: 'admin',
  },
  TEAM: {
    label: 'Équipe',
    value: 'team',
  },
  USER: {
    label: 'Utilisateur',
    value: 'user',
  },
  HOME: {
    label: "Borne d'accueil",
    value: 'home',
  },
};
