import UsersService from "../Services/UsersService";

class UsersController {

  static async getUserInfo() {
    let response = await UsersService.getUserInfo();
    return response;
  }
}

export default UsersController;
