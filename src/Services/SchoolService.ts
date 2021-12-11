import School from "../Entity/School";
import typeormConnection from "../Libs/typeorm";
import { Repository } from "typeorm";

class SchoolService {

  connection: Repository<School>;
  constructor() {
    typeormConnection
      .then((c) => (this.connection = c.getRepository(School)))
      .catch((e) => console.error(e));
  }
  
  async getSchoolByTeacher(teacherId: number) {
    const response = await this.connection.query(
      `SELECT 
        s.id,
        s.name
      FROM school s
      INNER JOIN employee e ON s.id = e."subjectId"
      INNER JOIN interests i ON e."schoolId" = i."schoolId"
      WHERE i."usersId" = 1 AND e."teacherId" = ${teacherId};`
    );
    return response;
  }

}
export default SchoolService;