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
    roles: ['admin'],
  },
};
