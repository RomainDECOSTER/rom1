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
    roles: ['admin'],
  },
};
