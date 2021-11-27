import UserService from "../Services/UserService";

class TeacherController {
  userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async getAllTeachers() {
    let response = await this.userService.getAllTeachers();
    return response;
  }
}

export default TeacherController;
