import LoginRequestDTO from "../Entity/DTOs/LoginRequestDTO";
import AccountService from "../Services/AccountService";

class AuthController {
    accountService: AccountService;

    constructor() {
        this.accountService = new AccountService();
    }

    async login(loginInfo: LoginRequestDTO) {
        let response = this.accountService.login(loginInfo);
        return response;
    }

}
export default AuthController;
