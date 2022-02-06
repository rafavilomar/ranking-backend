import typeormConnection from "../Libs/typeorm";
import bycrypt from "bcrypt";

//ENTITIES
import Users from "../Entity/Users";
import UsersDTO from "../Entity/DTOs/UsersDTO";
import Account from "../Entity/Account";

//SERVICES
import AccountService from "./AccountService";

class UsersService {

  static async getUserInfo() {

    const connection = (await typeormConnection).getRepository(Users);
    const response: Users = await connection.findOne(1, {
      relations: ["votes"],
    });
    return response;
  }

  static async createUser(newUser: UsersDTO) {

    const connection = (await typeormConnection).getRepository(Users);
    try {
      let account = new Account();
      account.username = newUser.username;
      account.password = bycrypt.hashSync(newUser.password, 10);
      const accountCreated: Account = await AccountService.createAccount(account);

      let user = new Users();
      user.email = newUser.email;
      user.idAccount = accountCreated;
      const userCreated: Users = await connection.save(user);

    } catch (error) {
      console.error(error);
      throw new Error("Can't create a new Account");
    }
  }

  static async getByAccount(account: Account) {
    const connection = (await typeormConnection).getRepository(Users);
    const response: Users = await connection.findOne({ idAccount: account });
    return response;
  }
}
export default UsersService;
