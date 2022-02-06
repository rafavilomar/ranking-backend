import typeormConnection from "../Libs/typeorm";
import SchoolService from "./SchoolService";
import SubjectService from "./SubjectService";
import { Like, Repository } from "typeorm";
import Teacher from "../Entity/Teacher";
import VoteService from "./VoteService";

class TeacherService {
  connection: Repository<Teacher>;
  schoolService: SchoolService;
  subjectService: SubjectService;
  voteService: VoteService;

  constructor() {
    typeormConnection
      .then((c) => (this.connection = c.getRepository(Teacher)))
      .catch((e) => console.error(e));
    this.schoolService = new SchoolService();
    this.subjectService = new SubjectService();
    this.voteService = new VoteService();
  }

  async searchTeachers(fullname: string) {

    const response: Teacher[] = await this.connection.find(
      { fullname: Like(`%${fullname}%`) }
    );

    for (let i = 0; i < response.length; i++) {
      response[i].subjects = await this.subjectService.getSubjectByTeacher(response[i].id);
      response[i].schools = await this.schoolService.getSchoolByTeacher(response[i].id);
    }
    return response;
  }

  async getAllTeachers() {

    const response: Teacher[] = await this.connection.query(
      `SELECT 
        t.*
      FROM teacher t
      INNER JOIN employee e ON t.id = e.teacherId
      INNER JOIN interests i ON e.schoolId = i.schoolId
      WHERE i.usersId = 1;`
    );

    for (let i = 0; i < response.length; i++) {
      response[i].subjects = await this.subjectService.getSubjectByTeacher(response[i].id);
      response[i].schools = await this.schoolService.getSchoolByTeacher(response[i].id);
    }
    return response;
  }

  async getTeacherInfo(id: number) {
    const response: Teacher = await this.connection.findOne(
      { id: id },
      { relations: ["votes"] }
    );
    if (response) {
      response.positiveVotes = await this.voteService.getVotesByTeacher(
        response,
        true
      );
      response.negativeVotes = await this.voteService.getVotesByTeacher(
        response,
        false
      );
    }

    return response;
  }
}
export default TeacherService;
