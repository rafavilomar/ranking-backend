import jwt from "jsonwebtoken";
import config from "../../config"
import { ExtractJwt, Strategy, StrategyOptions } from "passport-jwt"
import passport from "passport";

import Account from "../Entity/Account";
import Users from "../Entity/Users";

export const signToken = (account: Account, user: Users) => {

    const expirationTime = config.api.time * 60 * 60;

    const payload = {
        sub: account.username,
        id: user.id
    }
    return jwt.sign(payload, config.api.secret, { expiresIn: expirationTime });
}

export const verifyToken = (token: string) => {
    return jwt.verify(token, config.api.secret)
}

export const validateToken = () => {
    const options: StrategyOptions = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.api.secret
    }
    return new Strategy(options, (payload, done) => { return done(null, payload) })
}

passport.use(validateToken())