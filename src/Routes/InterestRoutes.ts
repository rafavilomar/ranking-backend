import express from "express";
import InterestController from "../Controllers/InterestController";

async function createInterest(req: any, res: any) {
  const response = await InterestController.createInterest(req.body);
  res.json(response);
}

async function getAllInterests(req: any, res: any) {
  const response = await InterestController.getAllInterests();
  res.json(response);
}

const router = express.Router();

router.get("/", getAllInterests);
router.post("/", createInterest);

export default router;
