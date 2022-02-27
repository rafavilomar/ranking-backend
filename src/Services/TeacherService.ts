import { Like } from "typeorm";
import typeormConnection from "../Libs/typeorm";
import { TokenPayload, verifyToken } from "../Utils/token";

// ENTITES
import Teacher from "../Entity/Teacher";
import Vote from "../Entity/Vote";

// SERVICES
import VoteService from "./VoteService";
import SchoolService from "./SchoolService";
import SubjectService from "./SubjectService";

class TeacherService {
  static async searchTeachers(fullname: string) {
    const connection = (await typeormConnection).getRepository(Teacher);
    const response: Teacher[] = await connection.find({
      fullname: Like(`%${fullname}%`),
    });

    for (let i = 0; i < response.length; i++) {
      response[i].subjects = await SubjectService.getSubjectByTeacher(
        response[i].id
      );
      response[i].schools = await SchoolService.getSchoolByTeacher(
        response[i].id
      );
    }
    return response;
  }

  static async getAllTeachers(req: any) {
    const connection = (await typeormConnection).getRepository(Teacher);
    const token: string = req.headers.authorization.split(" ")[1];
    const tokenPayload: TokenPayload = verifyToken(token);

    const response: Teacher[] = await connection.query(
      `SELECT 
        t.*
      FROM teacher t
      INNER JOIN employee e ON t.id = e.teacherId
      INNER JOIN interests i ON e.schoolId = i.schoolId
      WHERE i.usersId = ${tokenPayload.id};`
    );

    for (let i = 0; i < response.length; i++) {
      response[i].subjects = await SubjectService.getSubjectByTeacher(
        response[i].id
      );
      response[i].schools = await SchoolService.getSchoolByTeacher(
        response[i].id
      );
    }
    return response;
  }

  static async getTeacherInfo(id: number) {
    const connection = (await typeormConnection).getRepository(Teacher);
    const response: Teacher = await connection.findOne(
      { id },
      { relations: ["votes"] }
    );
    if (response) {
      response.subjects = await SubjectService.getSubjectByTeacher(response.id);
      response.schools = await SchoolService.getSchoolByTeacher(response.id);

      const voteList: Vote[] = [];
      for (let i = 0; i < response.votes.length; i++) {
        const vote = await VoteService.getFullById(response.votes[i].id);
        voteList.push(vote);
      }
      response.votes = voteList;

      response.positiveVotes = await VoteService.getVotesByTeacher(
        response,
        true
      );

      response.negativeVotes = await VoteService.getVotesByTeacher(
        response,
        false
      );
    }

    return response;
  }

  static async createTeacher(teacher: Teacher) {
    const connection = (await typeormConnection).getRepository(Teacher);
    return connection.save(teacher);
  }

  static async getTeachers() {
    const connection = (await typeormConnection).getRepository(Teacher);
    return connection.find();
  }

  static async getRandomTeacher() {
    const connection = (await typeormConnection).getRepository(Teacher);
    const response: Teacher[] = await connection
      .createQueryBuilder()
      .select("*")
      .from(Teacher, "teacher")
      .orderBy("RAND()")
      .limit(1)
      .execute();

    return response[0];
  }

  static async getTopTeachers() {
    const connection = (await typeormConnection).getRepository(Teacher);
    const response: any[] = await connection.query(
      `SELECT teacher.*, COUNT(vote) as votes 
      FROM teacher
      INNER JOIN vote ON vote.teacherId = teacher.id
      WHERE vote.vote = true
      GROUP BY vote.teacherId
      ORDER BY 2
      LIMIT 3`
    );

    return response;
  }
}
export default TeacherService;
