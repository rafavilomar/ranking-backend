import typeormConnection from "../Libs/typeorm";
import { Repository } from "typeorm";
import bycrypt from "bcrypt";

import Account from "../Entity/Account";
import { signToken } from "../Utils/token";
import LoginRequestDTO from "../Entity/DTOs/login/LoginRequestDTO";
import LoginResponseDTO from "../Entity/DTOs/login/LoginResponseDTO";
import Users from "../Entity/Users";
import UsersService from "./UsersService";

class AccountService {
    connection: Repository<Account>;
    constructor() {
        typeormConnection
            .then((c) => (this.connection = c.getRepository(Account)))
            .catch((e) => console.error(e));
    }

    async login(loginInfo: LoginRequestDTO) {
        const account: Account = await this.connection.findOne({ username: loginInfo.username });
        if (account && bycrypt.compareSync(loginInfo.password, account.password)) {
            const user: Users = await UsersService.getByAccount(account);
            let response: LoginResponseDTO = {
                id: account.id,
                username: account.username,
                img: "",
                token: signToken(account, user)
            };
            return response;
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
