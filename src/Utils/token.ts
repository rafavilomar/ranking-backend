import jwt from "jsonwebtoken";
import config from "../../config"
import { ExtractJwt, Strategy, StrategyOptions } from "passport-jwt"
import passport from "passport";

import Account from "../Entity/Account";
import Users from "../Entity/Users";

export type TokenPayload = {
    sub: string,
    id: number,
    iat?: number,
    exp?: number
}

export const signToken = (account: Account, user: Users) => {

    const expirationTime = config.api.time * 60 * 60;

    const payload: TokenPayload = {
        sub: account.username,
        id: user.id
    }
    return jwt.sign(payload, config.api.secret, { expiresIn: expirationTime });
}

export const verifyToken = (token: string) => {
    const tokenPayload: TokenPayload = jwt.verify(token, config.api.secret) as TokenPayload;
    return tokenPayload;
}

export const validateToken = () => {
    const options: StrategyOptions = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.api.secret
    }
    return new Strategy(options, (payload, done) => { return done(null, payload) })
}

export const refreshToken = (token: string) => {

    const tokenPayload = jwt.decode(token) as TokenPayload;
    let nowInMinutes = Date.now() / 1000 / 60;
    let expireInMinutes = (tokenPayload.exp / 60) - nowInMinutes;

    if (expireInMinutes <= 20 || expireInMinutes <= -20) {
        const expirationTime = config.api.time * 60 * 60;
        const newPayload: TokenPayload = {
            id: tokenPayload.id,
            sub: tokenPayload.sub
        }
        return jwt.sign(newPayload, config.api.secret, { expiresIn: expirationTime });
    }

    return token
}

passport.use(validateToken())