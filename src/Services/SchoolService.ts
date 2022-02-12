import School from "../Entity/School";
import typeormConnection from "../Libs/typeorm";

class SchoolService {
  
  static async getSchoolByTeacher(teacherId: number) {
    const connection = (await typeormConnection).getRepository(School);
    const response = await connection.query(
      `SELECT 
        s.id,
        s.name
      FROM school s
      INNER JOIN employee e ON s.id = e.subjectId
      INNER JOIN interests i ON e.schoolId = i.schoolId
      WHERE i.usersId = 1 AND e.teacherId = ${teacherId};`
    );
    return response;
  }

}
export default SchoolService;