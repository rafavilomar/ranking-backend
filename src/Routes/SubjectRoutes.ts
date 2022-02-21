import express from "express";
import SubjectController from "../Controllers/SubjectController";

async function createSubject(req: any, res: any) {
  const response = await SubjectController.createSubject(req.body);
  res.json(response);
}

async function getAllSubjects(req: any, res: any) {
  const response = await SubjectController.getAllSubjects();
  res.json(response);
}

const router = express.Router();

router.get("/", getAllSubjects);
router.post("/", createSubject);

export default router;
