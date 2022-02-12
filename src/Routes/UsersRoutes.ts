import express from "express";
import UsersController from "../Controllers/UsersController";

const router = express.Router();

router.get("/:id", getUserInfo);

async function getUserInfo(req: any, res: any) {
  let response = await UsersController.getUserInfo();
  res.json(response);
}

export default router;
