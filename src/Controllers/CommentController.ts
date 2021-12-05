import CommentService from "../Services/CommentService";

class CommentController {
  commentService: CommentService;

  constructor() {
    this.commentService = new CommentService();
  }

  async getCommentByTeacher() {
    let response = this.commentService.getCommentByTeacher();
    return response;
  }
}
export default CommentController;
