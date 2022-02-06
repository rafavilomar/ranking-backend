//DTOs
import VoteRequestDTO from "../Entity/DTOs/vote/VoteRequestDTO";

//SERVICES
import VoteService from "../Services/VoteService";

class CommentController {

  static async getCommentByTeacher(id: number) {
    let response = VoteService.getCommentByTeacher(id);
    return response;
  }

  static async makeVote(vote: VoteRequestDTO) {
    let response = VoteService.makeVote(vote);
    return response;
  }
}
export default CommentController;
