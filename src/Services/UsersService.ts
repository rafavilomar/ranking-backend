import Users from "../Entity/Users";
import { Repository } from "typeorm";
import typeormConnection from "../Libs/typeorm";

class UsersService {
  connection: Repository<Users>;
  constructor() {
    typeormConnection
      .then((c) => (this.connection = c.getRepository(Users)))
      .catch((e) => console.error(e));
  }

  async getUserInfo() {
    const response: Users = await this.connection.findOne(1, {
      relations: ["votes"],
    });
    return response;
  }
}
export default UsersService;
