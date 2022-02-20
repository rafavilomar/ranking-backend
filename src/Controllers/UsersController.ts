import UsersService from "../Services/UsersService";

class UsersController {
  static async getUserInfo() {
    const response = await UsersService.getUserInfo();
    return response;
  }
}

export default UsersController;
