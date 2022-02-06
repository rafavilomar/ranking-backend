import typeormConnection from "../Libs/typeorm";
import { Like } from "typeorm";
import { TokenPayload, verifyToken } from "../Utils/token";

//ENTITES
import Teacher from "../Entity/Teacher";

//SERVICES
import VoteService from "./VoteService";
import SchoolService from "./SchoolService";
import SubjectService from "./SubjectService";

class TeacherService {

  static async searchTeachers(fullname: string) {

    const connection = (await typeormConnection).getRepository(Teacher);
    const response: Teacher[] = await connection.find(
      { fullname: Like(`%${fullname}%`) }
    );

    for (let i = 0; i < response.length; i++) {
      response[i].subjects = await SubjectService.getSubjectByTeacher(response[i].id);
      response[i].schools = await SchoolService.getSchoolByTeacher(response[i].id);
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
      response[i].subjects = await SubjectService.getSubjectByTeacher(response[i].id);
      response[i].schools = await SchoolService.getSchoolByTeacher(response[i].id);
    }
    return response;
  }

  static async getTeacherInfo(id: number) {

    const connection = (await typeormConnection).getRepository(Teacher);
    const response: Teacher = await connection.findOne(
      { id: id },
      { relations: ["votes"] }
    );
    if (response) {
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
}
export default TeacherService;
