import express from "express";
import UsersController from "../Controllers/UsersController";

const router = express.Router();
let userController = new UsersController();

router.get("/:id", getUserInfo);

async function getUserInfo(req: any, res: any) {
  let response = await userController.getUserInfo();
  res.json(response);
}

export default router;
