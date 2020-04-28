export type LoginDetail = {
  username: string | null;
  password: string | null;
};

export type LoginSuccess = {
  token: string;
  exprires: number;
  user: {
    exp: number;
    username: string;
    roles: Array<string>;
  };
};
