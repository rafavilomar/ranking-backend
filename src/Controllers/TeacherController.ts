import Teacher from "../Entity/Teacher";
import TeacherService from "../Services/TeacherService";

class TeacherController {
  static async getAllTeachers(req: any) {
    const response = await TeacherService.getAllTeachers(req);
    return response;
  }

  static async getTeacherInfo(id: number) {
    const response = await TeacherService.getTeacherInfo(id);
    return response;
  }

  static async searchTeachers(fullname: string) {
    const response = await TeacherService.searchTeachers(fullname);
    return response;
  }

  static async createTeacher(teacher: Teacher) {
    const response = await TeacherService.createTeacher(teacher);
    return response;
  }

  static async getTeachers() {
    const response = await TeacherService.getTeachers();
    return response;
  }

  static async getRandomTeacher() {
    const response = await TeacherService.getRandomTeacher();
    return response;
  }
}

export default TeacherController;
