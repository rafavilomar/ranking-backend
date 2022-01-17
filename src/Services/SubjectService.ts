import typeormConnection from "../Libs/typeorm";
import { Repository } from "typeorm";
import Subject from "../Entity/Subject";

class SubjectService {
  connection: Repository<Subject>;
  constructor() {
    typeormConnection
      .then((c) => (this.connection = c.getRepository(Subject)))
      .catch((e) => console.error(e));
  }

  async getSubjectByTeacher(teacherId: number) {
    const response = await this.connection.query(
      `SELECT
        s.*
      FROM subject s
      INNER JOIN employee e ON s.id = e.subjectId
      INNER JOIN interests i ON e.schoolId = i.schoolId
      WHERE i.usersId = 1 AND e.teacherId = ${teacherId};`
    );
    return response;
  }
}
export default SubjectService;
