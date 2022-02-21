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

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/refreshToken/", refreshToken);

export default router;
