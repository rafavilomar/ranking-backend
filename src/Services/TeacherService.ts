import typeormConnection from "../Libs/typeorm";
import SchoolService from "./SchoolService";
import SubjectService from "./SubjectService";
import { Repository } from "typeorm";
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

  async getAllTeachers() {
    //todo: get subjects and schools
    const response = await this.connection.find();
    return response;
  }

  async getTeacherInfo() {
    const response: Teacher = await this.connection.findOne(
      { id: 1 },
      { relations: ["votes"] }
    );
    response.positiveVotes = await this.voteService.getVotesByTeacher(
      response,
      true
    );
    response.negativeVotes = await this.voteService.getVotesByTeacher(
      response,
      false
    );
    return response;
  }
}
export default TeacherService;
