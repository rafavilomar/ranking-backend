import typeormConnection from "../Libs/typeorm";

//ENTITES
import Subject from "../Entity/Subject";

class SubjectService {

  static async getSubjectByTeacher(teacherId: number) {
    const connection = (await typeormConnection).getRepository(Subject);
    const response = await connection.query(
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
