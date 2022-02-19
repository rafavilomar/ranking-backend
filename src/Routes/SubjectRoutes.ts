import express from "express";
import SubjectController from "../Controllers/SubjectController";

const router = express.Router();

router.get("/", getAllSubjects);
router.post("/", createSubject);

async function createSubject(req: any, res: any) {
  let response = await SubjectController.createSubject(req.body);
  res.json(response);
}

async function getAllSubjects(req: any, res: any) {
  let response = await SubjectController.getAllSubjects();
  res.json(response);
}
export default router;