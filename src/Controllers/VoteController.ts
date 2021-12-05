import VoteService from "../Services/VoteService";

class CommentController {
  voteService: VoteService;

  constructor() {
    this.voteService = new VoteService();
  }

  async getCommentByTeacher() {
    let response = this.voteService.getCommentByTeacher();
    return response;
  }

  async makeVote(){
    let response = this.voteService.makeVote();
    return response;
  }
}
export default CommentController;
