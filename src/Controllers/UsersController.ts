import UsersDTO from "../Entity/DTOs/UsersDTO";
import UsersService from "../Services/UsersService";

class UsersController {
  userService: UsersService;

  constructor() {
    this.userService = new UsersService();
  }

  async getUserInfo() {
    let response = await this.userService.getUserInfo();
    return response;
  }

  async createUser(newUser: UsersDTO) {
    let response = await this.userService.createUser(newUser);
    return response;
  }
}

export default UsersController;
