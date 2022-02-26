import express from "express";
import TeacherController from "../Controllers/TeacherController";

async function getAllTeachers(req: any, res: any) {
  const response = await TeacherController.getAllTeachers(req);
  res.json(response);
}

async function getTeacherInfo(req: any, res: any) {
  const response = await TeacherController.getTeacherInfo(req.params.id);
  res.json(response);
}

async function searchTeachers(req: any, res: any) {
  const response = await TeacherController.searchTeachers(req.params.fullname);
  res.json(response);
}

async function createTeacher(req: any, res: any) {
  const response = await TeacherController.createTeacher(req.body);
  res.json(response);
}

async function getTeachers(req: any, res: any) {
  const response = await TeacherController.getTeachers();
  res.json(response);
}

const router = express.Router();

router.get("/", getAllTeachers);
router.post("/", createTeacher);
router.get("/getTeachers", getTeachers);
router.get("/:id", getTeacherInfo);
router.get("/search/:fullname", searchTeachers);

export default router;
