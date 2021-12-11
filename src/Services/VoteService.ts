import Vote from "../Entity/Vote";
import typeormConnection from "../Libs/typeorm";
import { Repository } from "typeorm";
import Teacher from "../Entity/Teacher";
import Users from "../Entity/Users";

class VoteService {
  connection: Repository<Vote>;
  constructor() {
    typeormConnection
      .then((c) => (this.connection = c.getRepository(Vote)))
      .catch((e) => console.error(e));
  }

  async makeVote() {
    let teacher = new Teacher();
    teacher.id = 1;

    let user = new Users();
    user.id = 1;

    let vote = new Vote();
    vote.teacher = teacher;
    vote.users = user;
    vote.vote = false;
    vote.comment = "Sinceramente, no me ha gustado mucho :(";

    const response = await this.connection.save(vote);
    return response;
  }

  async getCommentByTeacher() {
    let teacher = new Teacher();
    teacher.id = 1;

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
