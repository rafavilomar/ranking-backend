import LoginInfoDTO from "../Entity/DTOs/LoginInfoDTO";
import AccountService from "../Services/AccountService";

class AuthController {
    accountService: AccountService;

    constructor() {
        this.accountService = new AccountService();
    }

    async login(loginInfo: LoginInfoDTO) {
        let response = this.accountService.login(loginInfo);
        return response;
    }

}
export default AuthController;
