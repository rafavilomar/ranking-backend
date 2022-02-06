import typeormConnection from "../Libs/typeorm";
import bycrypt from "bcrypt";
import { signToken } from "../Utils/token";

//ENTITIES
import Account from "../Entity/Account";
import Users from "../Entity/Users";

//DTOs
import LoginRequestDTO from "../Entity/DTOs/login/LoginRequestDTO";
import LoginResponseDTO from "../Entity/DTOs/login/LoginResponseDTO";

//SERVICES
import UsersService from "./UsersService";

class AccountService {

    static async login(loginInfo: LoginRequestDTO) {
        const connection = (await typeormConnection).getRepository(Account);
        const account: Account = await connection.findOne({ username: loginInfo.username });
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

    static async createAccount(newAccount: Account) {
        const connection = (await typeormConnection).getRepository(Account);
        const response = await connection.save(newAccount);
        return response;
    }
}
export default AccountService;
