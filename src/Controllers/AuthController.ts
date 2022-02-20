// DTOs
import UsersDTO from "../Entity/DTOs/UsersDTO";
import LoginRequestDTO from "../Entity/DTOs/login/LoginRequestDTO";

// SERVICES
import UsersService from "../Services/UsersService";
import AccountService from "../Services/AccountService";
import { refreshToken } from "../Utils/token";

class AuthController {
  static async login(loginInfo: LoginRequestDTO) {
    const response = AccountService.login(loginInfo);
    return response;
  }

  static async register(user: UsersDTO) {
    const response = UsersService.createUser(user);
    return response;
  }

  static async refreshToken(token: string) {
    const response = refreshToken(token);
    return response;
  }
}
export default AuthController;
