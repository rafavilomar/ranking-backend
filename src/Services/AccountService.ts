import typeormConnection from "../Libs/typeorm";
import { Repository } from "typeorm";

import Account from "../Entity/Account";

class AccountService {
    connection: Repository<Account>;
    constructor() {
        typeormConnection
            .then((c) => (this.connection = c.getRepository(Account)))
            .catch((e) => console.error(e));
    }

    async createAccount(newAccount: Account) {
        const response = await this.connection.save(newAccount);
        return response;
    }
}
export default AccountService;
