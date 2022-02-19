import express from "express";
import TeacherController from "../Controllers/TeacherController";

const router = express.Router();

router.get("/", getAllTeachers);
router.post("/", createTeacher);
router.get("/:id", getTeacherInfo);
router.get("/search/:fullname", searchTeachers);
router.get("/getTeachers", getTeachers);

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

async function createTeacher(req: any, res: any) {
  let response = await TeacherController.createTeacher(req.body);
  res.json(response);
}

async function getTeachers(req: any, res: any) {
  let response = await TeacherController.getTeachers();
  res.json(response);
}

export default router;
