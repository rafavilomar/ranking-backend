import jwt from "jsonwebtoken";
import { ExtractJwt, Strategy, StrategyOptions } from "passport-jwt";
import passport from "passport";
import config from "../../config";

import Account from "../Entity/Account";
import Users from "../Entity/Users";

export type TokenPayload = {
  sub: string;
  id: number;
  iat?: number;
  exp?: number;
};

export const signToken = (account: Account, user: Users) => {
  const expirationTime = config.api.time * 60 * 60;

  const payload: TokenPayload = {
    sub: account.username,
    id: user.id,
  };
  return jwt.sign(payload, config.api.secret, { expiresIn: expirationTime });
};

export const verifyToken = (token: string) => {
  const tokenPayload: TokenPayload = jwt.verify(
    token,
    config.api.secret
  ) as TokenPayload;
  return tokenPayload;
};

export const validateToken = () => {
  const options: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.api.secret,
  };
  return new Strategy(options, (payload, done) => done(null, payload));
};

export const refreshToken = (token: string) => {
  if (token.split(" ").length > 1) {
    const tokenInfo = token.split(" ")[1];
    const tokenPayload = jwt.decode(tokenInfo) as TokenPayload;
    const nowInMinutes = Date.now() / 1000 / 60;
    const expireInMinutes = tokenPayload.exp / 60 - nowInMinutes;

    if (expireInMinutes <= 20 || expireInMinutes <= -20) {
      const expirationTime = config.api.time * 60 * 60;
      const newPayload: TokenPayload = {
        id: tokenPayload.id,
        sub: tokenPayload.sub,
      };
      return jwt.sign(newPayload, config.api.secret, {
        expiresIn: expirationTime,
      });
    }
    return tokenInfo;
  }
  return token;
};

passport.use(validateToken());
