import TeacherService from "../Services/TeacherService";

class TeacherController {
  teacherService: TeacherService;

  constructor() {
    this.teacherService = new TeacherService();
  }

  async getAllTeachers(req: any) {
    let response = await this.teacherService.getAllTeachers(req);
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
