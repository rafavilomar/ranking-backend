import express from "express";
import TeacherController from "../Controllers/TeacherController";

const router = express.Router();

router.get("/", getAllTeachers);
router.post("/", createTeacher);
router.get("/getTeachers", getTeachers);
router.get("/getRandom", getRandomTeacher);
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

async function createTeacher(req: any, res: any) {
  let response = await TeacherController.createTeacher(req.body);
  res.json(response);
}

async function getTeachers(req: any, res: any) {
  let response = await TeacherController.getTeachers();
  res.json(response);
}

async function getRandomTeacher(req: any, res: any) {
  let response = await TeacherController.getRandomTeacher();
  res.json(response);
}

export default router;
