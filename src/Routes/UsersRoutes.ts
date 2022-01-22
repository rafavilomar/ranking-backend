import express from "express";
import UsersController from "../Controllers/UsersController";
import passport from "passport"

const router = express.Router();
let userController = new UsersController();

router.post("/", createUser);
router.get("/:id", passport.authenticate('jwt', { session: false }), getUserInfo);

async function getUserInfo(req: any, res: any) {
  let response = await userController.getUserInfo();
  res.json(response);
}

async function createUser(req: any, res: any) {
  let response = await userController.createUser(req.body);
  res.json(response);
}

export default router;
