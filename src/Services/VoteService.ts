import typeormConnection from "../Libs/typeorm";

//ENTITIES
import Teacher from "../Entity/Teacher";
import Users from "../Entity/Users";
import Vote from "../Entity/Vote";

//DTOs
import VoteRequestDTO from "../Entity/DTOs/vote/VoteRequestDTO";

class VoteService {

  static async makeVote(vote: VoteRequestDTO) {
    
    const connection = (await typeormConnection).getRepository(Vote);
    let teacher = new Teacher();
    teacher.id = vote.teacherId;

    let user = new Users();
    user.id = vote.usersId;

    let newVote = new Vote;
    newVote.teacher = teacher;
    newVote.users = user;
    newVote.vote = vote.vote;
    newVote.comment = vote.comment;

    const response = await connection.save(newVote);
    return response;
  }

  static async getCommentByTeacher(id: number) {

    const connection = (await typeormConnection).getRepository(Vote);
    let teacher = new Teacher();
    teacher.id = id;

    const response = await connection.find({
      teacher: teacher,
    });
    return response;
  }

  static async getVotesByTeacher(teacher: Teacher, vote: boolean) {
    
    const connection = (await typeormConnection).getRepository(Vote);
    const response = await connection.find({
      teacher: teacher,
      vote: vote,
    });
    return response.length;
  }
}
export default VoteService;
