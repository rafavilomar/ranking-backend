import typeormConnection from "../Libs/typeorm";
import SchoolService from "./SchoolService";
import SubjectService from "./SubjectService";
import { Repository } from "typeorm";
import Teacher from "../Entity/Teacher";

class TeacherService {
  connection: Repository<Teacher>;
  schoolService: SchoolService;
  subjectService: SubjectService;

  constructor() {
    typeormConnection
      .then((c) => (this.connection = c.getRepository(Teacher)))
      .catch((e) => console.error(e));
    this.schoolService = new SchoolService();
    this.subjectService = new SubjectService();
  }

  async getAllTeachers() {

    const response = await this.connection.find();
    return response;

  }

  async getTeacherInfo() {
    const response = this.connection.query(
      `SELECT 
        t.id AS teacherId,
        t.fullname AS teacherName,
        t.img,
        (SELECT COUNT(*) FROM vote where idTeacher = t.id AND vote = true) AS positiveVotes,
        (SELECT COUNT(*) FROM vote where idTeacher = t.id AND vote = false) AS negativeVotes
      FROM teacher t;`
    );
    return (await response).rows;
  }
}
export default TeacherService;
