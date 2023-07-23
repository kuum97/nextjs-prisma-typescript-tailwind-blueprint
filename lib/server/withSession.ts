import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
  interface IronSessionData {
    userId?: number;
    loggedIn?: boolean;
  }
}

const cookieOptions = {
  cookieName: "tweetsession",
  password: "helloasdfsdfasfsafasfsfafsfsadfsdfewagvbfabaregrwgargasgasg",
};

export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}
