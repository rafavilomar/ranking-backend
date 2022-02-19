import express from "express";
import InterestController from "../Controllers/InterestController";

const router = express.Router();

router.get("/", getAllInterests);
router.post("/", createInterest);

async function createInterest(req: any, res: any) {
  let response = await InterestController.createInterest(req.body);
  res.json(response);
}

async function getAllInterests(req: any, res: any) {
  let response = await InterestController.getAllInterests();
  res.json(response);
}
export default router;