import typeormConnection from "../Libs/typeorm";

// ENTITIES
import Teacher from "../Entity/Teacher";
import Users from "../Entity/Users";
import Vote from "../Entity/Vote";

// DTOs
import VoteRequestDTO from "../Entity/DTOs/vote/VoteRequestDTO";
import AccountService from "./AccountService";

class VoteService {
  static async getFullById(id: number) {
    const connection = (await typeormConnection).getRepository(Vote);
    const response = await connection.findOne(id, {
      relations: ["teacher", "users"],
    });
    response.users.idAccount = await AccountService.getByUser(response.users);
    return response;
  }

  static async makeVote(vote: VoteRequestDTO) {
    const connection = (await typeormConnection).getRepository(Vote);
    const teacher = new Teacher();
    teacher.id = vote.teacherId;

    const user = new Users();
    user.id = vote.usersId;

    const newVote = new Vote();
    newVote.teacher = teacher;
    newVote.users = user;
    newVote.vote = vote.vote;
    newVote.comment = vote.comment;

    const response = await connection.save(newVote);
    return response;
  }

  static async getCommentByTeacher(id: number) {
    const connection = (await typeormConnection).getRepository(Vote);
    const teacher = new Teacher();
    teacher.id = id;

    const response = await connection.find({
      teacher,
    });
    return response;
  }

  static async getVotesByTeacher(teacher: Teacher, vote: boolean) {
    const connection = (await typeormConnection).getRepository(Vote);
    const response = await connection.find({
      teacher,
      vote,
    });
    return response.length;
  }

  static async checkVote(idTeacher: number, idUser: number) {
    const connection = (await typeormConnection).getRepository(Vote);
    let result: boolean = false;

    const response = await connection.find({
      teacher: { id: idTeacher },
      users: { id: idUser },
    });
    if (response.length > 0) {
      result = true;
    }

    return result;
  }
}
export default VoteService;
