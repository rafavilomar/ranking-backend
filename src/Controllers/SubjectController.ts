import Subject from "../Entity/Subject";
import SubjectService from "../Services/SubjectService";

class SubjectController {
  static async createSubject(subject: Subject) {
    const response = await SubjectService.createSubject(subject);
    return response;
  }

  static async getAllSubjects() {
    const response = await SubjectService.getAllSubjects();
    return response;
  }
}
export default SubjectController;
