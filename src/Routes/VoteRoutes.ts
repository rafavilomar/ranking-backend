import express from "express";
import VoteController from "../Controllers/VoteController";

const router = express.Router();

router.post("/", makeVote);
router.get("/byTeacher/:id", getCommentByTeacher);
router.get("/checkVote", checkVote);

async function makeVote(req: any, res: any) {
  let response = await VoteController.makeVote(req.body);
  res.json(response);
}

async function getCommentByTeacher(req: any, res: any) {
  let response = await VoteController.getCommentByTeacher(req.params.id);
  res.json(response);
}

async function checkVote(req: any, res: any) {
  let response = await VoteController.checkVote(req.query.idTeacher, req.query.idUser);
  res.json(response);
}

export default router;