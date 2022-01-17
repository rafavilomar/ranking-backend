import { Repository } from "typeorm";
import typeormConnection from "../Libs/typeorm";
import bycrypt from "bcrypt";

import Users from "../Entity/Users";
import UsersDTO from "../Entity/DTOs/UsersDTO";
import Account from "../Entity/Account";
import AccountService from "./AccountService";

class UsersService {
  connection: Repository<Users>;
  accountService: AccountService;
  constructor() {
    typeormConnection
      .then((c) => (this.connection = c.getRepository(Users)))
      .catch((e) => console.error(e));
    this.accountService = new AccountService();
  }

  async getUserInfo() {
    const response: Users = await this.connection.findOne(1, {
      relations: ["votes"],
    });
    return response;
  }

  async createUser(newUser: UsersDTO) {

    try {
      let account = new Account();
      account.username = newUser.username;
      account.password = bycrypt.hashSync(newUser.password, 10);
      const accountCreated: Account = await this.accountService.createAccount(account);
      
      let user = new Users();
      user.email = newUser.email;
      user.img = newUser.img;
      user.idAccount = accountCreated;
      const userCreated: Users = await this.connection.save(user);

    } catch (error) {
      console.error(error);
      throw new Error("Can't create a new Account");
    }
  }
}
export default UsersService;
