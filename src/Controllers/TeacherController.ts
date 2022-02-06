import TeacherService from "../Services/TeacherService";

class TeacherController {

  static async getAllTeachers(req: any) {
    let response = await TeacherService.getAllTeachers(req);
    return response;
  }

  static async getTeacherInfo(id: number) {
    let response = await TeacherService.getTeacherInfo(id);
    return response;
  }

  static async searchTeachers(fullname: string) {
    let response = await TeacherService.searchTeachers(fullname);
    return response;
  }
}

export default TeacherController;
