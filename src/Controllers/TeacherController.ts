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

  async getTeacherInfo(id: number) {
    let response = await this.teacherService.getTeacherInfo(id);
    return response;
  }
  
  async searchTeachers(fullname: string) {
    let response = await this.teacherService.searchTeachers(fullname);
    return response;
  }
}

export default TeacherController;
