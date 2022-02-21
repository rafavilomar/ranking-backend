import express from "express";
import SchoolController from "../Controllers/SchoolController";

async function createSchool(req: any, res: any) {
  const response = await SchoolController.createSchool(req.body);
  res.json(response);
}

async function getAllSchools(req: any, res: any) {
  const response = await SchoolController.getAllSchools();
  res.json(response);
}

const router = express.Router();

router.get("/", getAllSchools);
router.post("/", createSchool);

export default router;
