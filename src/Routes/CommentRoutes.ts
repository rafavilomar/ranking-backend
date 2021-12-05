import express from "express";
import CommentController from "../Controllers/CommentController";

const router = express.Router();
let commentController = new CommentController();

router.get("byTeacher/:id", getCommentByTeacher);

async function getCommentByTeacher(req: any, res: any) {
  let response = commentController.getCommentByTeacher();
  res.json(response);
}
