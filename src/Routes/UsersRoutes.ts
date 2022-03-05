import express from "express";
import UsersController from "../Controllers/UsersController";

async function getUserInfo(req: any, res: any) {
  const response = await UsersController.getUserInfo(req.params.id);
  res.json(response);
}

const router = express.Router();
router.get("/:id", getUserInfo);

export default router;
