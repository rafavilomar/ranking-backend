import bycrypt from "bcrypt";
import typeormConnection from "../Libs/typeorm";

// ENTITIES
import Users from "../Entity/Users";
import UsersDTO from "../Entity/DTOs/UsersDTO";
import Account from "../Entity/Account";
import Vote from "../Entity/Vote";

// SERVICES
import AccountService from "./AccountService";
import VoteService from "./VoteService";

class UsersService {
  static async getUserInfo(id: number) {
    const connection = (await typeormConnection).getRepository(Users);
    const response: Users = await connection.findOne(id, {
      relations: ["votes"],
    });

    const voteList: Vote[] = [];
    for (let i = 0; i < response.votes.length; i++) {
      const vote = await VoteService.getFullById(response.votes[i].id);
      voteList.push(vote);
    }

    response.votes = voteList;
    return response;
  }

  static async createUser(newUser: UsersDTO) {
    const connection = (await typeormConnection).getRepository(Users);
    try {
      const account = new Account();
      account.username = newUser.username;
      account.password = bycrypt.hashSync(newUser.password, 10);
      const accountCreated: Account = await AccountService.createAccount(
        account
      );

      const user = new Users();
      user.email = newUser.email;
      user.idAccount = accountCreated;
      await connection.save(user);
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
