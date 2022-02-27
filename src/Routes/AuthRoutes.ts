import express from "express";
import AuthController from "../Controllers/AuthController";

async function login(req: any, res: any) {
  const response = await AuthController.login(req.body);
  res.json(response);
}
async function register(req: any, res: any) {
  const response = await AuthController.register(req.body);
  res.json(response);
}
async function refreshToken(req: any, res: any) {
  const response = await AuthController.refreshToken(req.headers.authorization);
  res.json(response);
}

async function getTopTeachers(req: any, res: any) {
  const response = await AuthController.getTopTeachers();
  res.json(response);
}

async function getRandomTeacher(req: any, res: any) {
  const response = await AuthController.getRandomTeacher();
  res.json(response);
}

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/refreshToken/", refreshToken);
router.get("/top", getTopTeachers);
router.get("/getRandom", getRandomTeacher);

export default router;
