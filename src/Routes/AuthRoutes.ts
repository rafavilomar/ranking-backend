import express from "express";
import AuthController from "../Controllers/AuthController";

const router = express.Router();
let authController = new AuthController();

router.post("/login", login);

async function login(req: any, res: any) {
    let response = await authController.login(req.body);
    res.json(response);
}

export default router;
