import express from "express";
import VoteController from "../Controllers/VoteController";

const router = express.Router();

router.post("/", makeVote);
router.get("/byTeacher/:id", getCommentByTeacher);

async function makeVote(req: any, res: any) {
  let response = await VoteController.makeVote(req.body);
  res.json(response);
}

async function getCommentByTeacher(req: any, res: any) {
  let response = await VoteController.getCommentByTeacher(req.params.id);
  res.json(response);
}

export default router;