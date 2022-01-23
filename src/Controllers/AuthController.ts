import UsersService from "../Services/UsersService";
import LoginRequestDTO from "../Entity/DTOs/login/LoginRequestDTO";
import AccountService from "../Services/AccountService";
import UsersDTO from "../Entity/DTOs/UsersDTO";

class AuthController {
    accountService: AccountService;
    userService: UsersService

    constructor() {
        this.accountService = new AccountService();
        this.userService = new UsersService();
    }

    async login(loginInfo: LoginRequestDTO) {
        let response = this.accountService.login(loginInfo);
        return response;
    }

    async register(user: UsersDTO) {
        let response = this.userService.createUser(user);
        return response;
    }

}
export default AuthController;
