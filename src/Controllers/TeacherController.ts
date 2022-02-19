import Teacher from "../Entity/Teacher";
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

  static async createTeacher(teacher: Teacher) {
    let response = await TeacherService.createTeacher(teacher);
    return response;
  }

  static async getTeachers() {
    let response = await TeacherService.getTeachers();
    return response;
  }
}

export default TeacherController;
