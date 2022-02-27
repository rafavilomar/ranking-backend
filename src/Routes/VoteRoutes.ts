import express from "express";
import VoteController from "../Controllers/VoteController";

async function makeVote(req: any, res: any) {
  const response = await VoteController.makeVote(req.body);
  res.json(response);
}

async function getCommentByTeacher(req: any, res: any) {
  const response = await VoteController.getCommentByTeacher(req.params.id);
  res.json(response);
}

async function checkVote(req: any, res: any) {
  const response = await VoteController.checkVote(
    req.query.idTeacher,
    req.query.idUser
  );
  res.json(response);
}

const router = express.Router();
router.post("/", makeVote);
router.get("/byTeacher/:id", getCommentByTeacher);
router.get("/checkVote", checkVote);

export default router;
