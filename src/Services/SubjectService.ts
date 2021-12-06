import { Pool } from "pg";
import pool from "../Libs/postgres.pool";

class SubjectService {

  connection: Pool;
  constructor() {
    this.connection = pool;
  }
  
  async getSubjectByTeacher() {
    const response = await this.connection.query(
      `SELECT 
        s.*
      FROM subject s
      INNER JOIN employee e ON s.id = e.subjectid
      INNER JOIN interests i ON e.schoolid = i.schoolid
      WHERE i.userid = 1 AND e.teacherid = 1;`
    );
    return response.rows;
  }

}
export default SubjectService;