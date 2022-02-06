import express from "express";
import TeacherController from "../Controllers/TeacherController";

const router = express.Router();

router.get("/", getAllTeachers);
router.get("/:id", getTeacherInfo);
router.get("/search/:fullname", searchTeachers);

async function getAllTeachers(req: any, res: any) {
  
  let response = await TeacherController.getAllTeachers(req);
  res.json(response);
}

async function getTeacherInfo(req: any, res: any) {
  let response = await TeacherController.getTeacherInfo(req.params.id);
  res.json(response);
}

async function searchTeachers(req: any, res: any) {
  let response = await TeacherController.searchTeachers(req.params.fullname);
  res.json(response);
}

export default router;
