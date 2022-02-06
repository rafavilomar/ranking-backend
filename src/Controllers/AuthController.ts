//DTOs
import UsersDTO from "../Entity/DTOs/UsersDTO";
import LoginRequestDTO from "../Entity/DTOs/login/LoginRequestDTO";

//SERVICES
import UsersService from "../Services/UsersService";
import AccountService from "../Services/AccountService";

class AuthController {

    static async login(loginInfo: LoginRequestDTO) {
        let response = AccountService.login(loginInfo);
        return response;
    }

    static async register(user: UsersDTO) {
        let response = UsersService.createUser(user);
        return response;
    }

}
export default AuthController;
