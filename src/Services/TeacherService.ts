import { Pool } from "pg";
import pool from "../Libs/postgres.pool";
import SchoolService from "./SchoolService";
import SubjectService from "./SubjectService";

class TeacherService {

  connection: Pool;
  schoolService: SchoolService;
  subjectService: SubjectService;

  constructor() {
    this.connection = pool;
    this.schoolService = new SchoolService();
    this.subjectService = new SubjectService();
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
      response.rows[i].subjects = await this.subjectService.getSubjectByTeacher();
      response.rows[i].schools = await this.schoolService.getSchoolByTeacher();
    }

    return response.rows;
  }

  async getTeacherInfo() {

    const response = this.connection.query(
      `SELECT 
        t.id teacherId,
        t.fullname teacherName,
        t.img
        (SELECT COUNT(*) FROM vote where idTeacher = t.id AND vote = true) AS positiveVotes,
        (SELECT COUNT(*) FROM vote where idTeacher = t.id AND vote = false) AS negativeVotes
      FROM teacher t;`
    );
    return (await response).rows;
    
  }

}
export default TeacherService;
