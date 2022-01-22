import typeormConnection from "../Libs/typeorm";
import { Repository } from "typeorm";
import bycrypt from "bcrypt";

import Account from "../Entity/Account";
import { signToken } from "../Utils/token";
import LoginInfoDTO from "../Entity/DTOs/LoginInfoDTO";

class AccountService {
    connection: Repository<Account>;
    constructor() {
        typeormConnection
            .then((c) => (this.connection = c.getRepository(Account)))
            .catch((e) => console.error(e));
    }

    async login(loginInfo: LoginInfoDTO) {
        const account: Account = await this.connection.findOne({ username: loginInfo.username });
        if (account && bycrypt.compareSync(loginInfo.password, account.password)) {
            return signToken(account);
        } else {
            return null;
        }
    }

    async createAccount(newAccount: Account) {
        const response = await this.connection.save(newAccount);
        return response;
    }
}
export default AccountService;
