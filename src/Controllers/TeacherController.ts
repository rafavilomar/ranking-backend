import TeacherService from "../Services/TeacherService";

class TeacherController {
  teacherService: TeacherService;

  constructor() {
    this.teacherService = new TeacherService();
  }

  async getAllTeachers() {
    let response = await this.teacherService.getAllTeachers();
    return response;
  }

  async getTeacherInfo() {
    let response = await this.teacherService.getTeacherInfo();
    return response;
  }
}

export default TeacherController;
