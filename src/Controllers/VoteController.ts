// DTOs
import VoteRequestDTO from "../Entity/DTOs/vote/VoteRequestDTO";

// SERVICES
import VoteService from "../Services/VoteService";

class CommentController {
  static async getCommentByTeacher(id: number) {
    const response = VoteService.getCommentByTeacher(id);
    return response;
  }

  static async makeVote(vote: VoteRequestDTO) {
    const response = VoteService.makeVote(vote);
    return response;
  }

  static async checkVote(idTeacher: number, idUser: number) {
    const response = VoteService.checkVote(idTeacher, idUser);
    return response;
  }
}
export default CommentController;
