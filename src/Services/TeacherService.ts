import { Client } from "pg";
import Teacher from "../Models/Teacher";
import getConnection from "../Libs/postgres";

class TeacherService {
  connection: Client;
  constructor() {
    getConnection().then((client) => (this.connection = client));
  }

  async getAllTeachers() {

    const response = await this.connection.query(
      `SELECT 
        t.id AS teacherId,
        t.fullname AS teacherName,
        t.img
      FROM teacher t
      INNER JOIN employee e ON t.id = e.teacherid
      INNER JOIN interests i ON e.schoolid = i.schoolid
      WHERE i.userid = 1;`
    );

    for (let i = 0; i < response.rows.length; i++) {
      response.rows[i].subjects = await this.getSubjectByTeacher();
      response.rows[i].schools = await this.getSchoolByTeacher();
    }

    return response.rows;
  }

  async getSchoolByTeacher() {
    const response = await this.connection.query(
      `SELECT 
        s.id,
        s.name
      FROM school s
      INNER JOIN employee e ON s.id = e.subjectid
      INNER JOIN interests i ON e.schoolid = i.schoolid
      WHERE i.userid = 1 AND e.teacherid = 1;`
    );
    return response.rows;
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
export default TeacherService;
