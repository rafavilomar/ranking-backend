import express from "express";
import SchoolController from "../Controllers/SchoolController";

const router = express.Router();

router.get("/", getAllSchools);
router.post("/", createSchool);

async function createSchool(req: any, res: any) {
  let response = await SchoolController.createSchool(req.body);
  res.json(response);
}

async function getAllSchools(req: any, res: any) {
  let response = await SchoolController.getAllSchools();
  res.json(response);
}
export default router;