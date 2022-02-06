import express from "express";
import AuthController from "../Controllers/AuthController";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);

async function login(req: any, res: any) {
    let response = await AuthController.login(req.body);
    res.json(response);
}
async function register(req: any, res: any) {
    let response = await AuthController.register(req.body);
    res.json(response);
}

export default router;
