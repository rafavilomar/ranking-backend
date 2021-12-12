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

  async makeVote(){
    let response = this.voteService.makeVote();
    return response;
  }
}
export default CommentController;
