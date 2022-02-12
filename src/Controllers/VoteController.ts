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

  static async checkVote(idTeacher: number, idUser: number) {
    let response = VoteService.checkVote(idTeacher, idUser);
    return response;
  }
}
export default CommentController;
