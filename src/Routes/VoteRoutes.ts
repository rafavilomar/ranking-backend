import express from "express";
import VoteController from "../Controllers/VoteController";

const router = express.Router();
let voteController = new VoteController();

router.post("/", makeVote);
router.get("/byTeacher/:id", getCommentByTeacher);

async function makeVote(req: any, res: any) {
  let response = await voteController.makeVote();
  res.json(response);
}

async function getCommentByTeacher(req: any, res: any) {
  let response = await voteController.getCommentByTeacher();
  res.json(response);
}

export default router;