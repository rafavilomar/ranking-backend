import TeacherService from "../Services/TeacherService";

class TeacherController {
  userService: TeacherService;

  constructor() {
    this.userService = new TeacherService();
  }

  async getAllTeachers() {
    let response = await this.userService.getAllTeachers();
    return response;
  }

  async getTeacherInfo() {
    let response = await this.userService.getTeacherInfo();
    return response;
  }
}

export default TeacherController;
