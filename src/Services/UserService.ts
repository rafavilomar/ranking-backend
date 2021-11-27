import { Client } from "pg";
import getConnection from "../Libs/postgres";

class UserService {
  connection: Client;
  constructor() {
    getConnection().then((client) => (this.connection = client));
  }

  async getAllTeachers() {
    const response = await this.connection.query("SELECT * FROM teacher;");
    return response.rows;
  }
}
export default UserService;
