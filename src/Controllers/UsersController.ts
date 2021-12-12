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
}

export default UsersController;
