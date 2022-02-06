import express from "express";
import TeacherController from "../Controllers/TeacherController";

const router = express.Router();
let teacherController = new TeacherController();

router.get("/", getAllTeachers);
router.get("/:id", getTeacherInfo);
router.get("/search/:fullname", searchTeachers);

async function getAllTeachers(req: any, res: any) {
  let response = await teacherController.getAllTeachers();
  res.json(response);
}

async function getTeacherInfo(req: any, res: any) {
  let response = await teacherController.getTeacherInfo(req.params.id);
  res.json(response);
}

async function searchTeachers(req: any, res: any) {
  let response = await teacherController.searchTeachers(req.params.fullname);
  res.json(response);
}

export default router;
