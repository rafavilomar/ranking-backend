import jwt from "jsonwebtoken";
import config from "../../config"
import Account from "../Entity/Account";

export const signToken = (account: Account) => {
    const payload = {
        sub: account.username
    }
    return jwt.sign(payload, config.api.secret);
} 

export const verifyToken = (token: string) => {
    return jwt.verify(token, config.api.secret)
}

