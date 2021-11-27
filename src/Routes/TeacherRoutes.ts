import express from "express";
import TeacherController from "../Controllers/TeacherController";

const router= express.Router()
let teacherController = new TeacherController();

router.get('/', getAllTeachers)

async function getAllTeachers(req: any, res: any) {
  let response = await teacherController.getAllTeachers();
  res.json(response);
}

export default router;