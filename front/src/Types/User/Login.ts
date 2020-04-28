export type LoginDetail = {
  username: string | null;
  password: string | null;
};

export type LoginSuccess = {
  token: string;
  exprires: string;
  user: {
    exp: number;
    username: string;
    roles: Array<string>;
  };
};
