import Vote from "../Entity/Vote";
import typeormConnection from "../Libs/typeorm";
import { Repository } from "typeorm";
import Teacher from "../Entity/Teacher";
import Users from "../Entity/Users";
import VoteRequestDTO from "../Entity/DTOs/vote/VoteRequestDTO";

class VoteService {
  connection: Repository<Vote>;
  constructor() {
    typeormConnection
      .then((c) => (this.connection = c.getRepository(Vote)))
      .catch((e) => console.error(e));
  }

  async makeVote(vote: VoteRequestDTO) {
    let teacher = new Teacher();
    teacher.id = vote.teacherId;

    let user = new Users();
    user.id = vote.usersId;

    let newVote = new Vote;
    newVote.teacher = teacher;
    newVote.users = user;
    newVote.vote = vote.vote;
    newVote.comment = vote.comment;

    // let newVote1: Vote = new Vote();
    // vote.teacher = teacher;
    // vote.users = user;
    // vote.vote = false;
    // vote.comment = "Sinceramente, no me ha gustado mucho :(";

    const response = await this.connection.save(newVote);
    return response;
  }

  async getCommentByTeacher(id: number) {
    let teacher = new Teacher();
    teacher.id = id;

    const response = await this.connection.find({
      teacher: teacher,
    });
    return response;
  }

  async getVotesByTeacher(teacher: Teacher, vote: boolean) {
    const response = await this.connection.find({
      teacher: teacher,
      vote: vote,
    });
    return response.length;
  }
}
export default VoteService;
