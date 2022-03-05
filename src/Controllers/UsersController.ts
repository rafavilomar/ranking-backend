import UsersService from "../Services/UsersService";

class UsersController {
  static async getUserInfo(id: number) {
    const response = await UsersService.getUserInfo(id);
    return response;
  }
}

export default UsersController;
