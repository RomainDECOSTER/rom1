export const Routes: any = {
  root: {
    path: '/',
    exact: true,
  },
  login: {
    path: '/login',
    exact: true,
  },
  admin: {
    root: {
      path: '/admin',
      exact: true,
    },
    user: {
      create: {
        path: '/admin/users',
        exact: true,
      },
      view: {
        path: '/admin/users/:id',
        exact: true,
      },
    },
    workshops: {
      create: {
        path: '/admin/workshops',
        exact: true,
      },
      view: {
        path: '/admin/workshops/:id',
        exact: true,
      },
    },
    campaigns: {
      create: {
        path: '/admin/campaigns',
        exact: true,
      },
      view: {
        path: '/admin/campaigns/:id',
        exact: true,
      },
    },
    roles: ['admin'],
  },
  management: {
    root: {
      path: '/management',
      exact: true,
    },
    volunteers: {
      create: {
        path: '/management/volunteers/create',
        exact: true,
      },
      view: {
        path: '/management/volunteers/:id',
        exact: true,
      },
    },
    students: {
      create: {
        path: '/management/students/create',
        exact: true,
      },
      view: {
        path: '/management/students/:id',
        exact: true,
      },
    },
    roles: ['admin', 'team'],
  },
};
