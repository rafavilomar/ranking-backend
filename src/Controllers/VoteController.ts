import VoteRequestDTO from "../Entity/DTOs/vote/VoteRequestDTO";
import VoteService from "../Services/VoteService";

class CommentController {
  voteService: VoteService;

  constructor() {
    this.voteService = new VoteService();
  }

  async getCommentByTeacher(id: number) {
    let response = this.voteService.getCommentByTeacher(id);
    return response;
  }

  async makeVote(vote: VoteRequestDTO){
    let response = this.voteService.makeVote(vote);
    return response;
  }
}
export default CommentController;
