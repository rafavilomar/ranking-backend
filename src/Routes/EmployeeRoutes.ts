import express from "express";
import EmployeeController from "../Controllers/EmployeeController";

async function createEmployee(req: any, res: any) {
  const response = await EmployeeController.createEmployee(req.body);
  res.json(response);
}

async function getAllEmployees(req: any, res: any) {
  const response = await EmployeeController.getAllEmployees();
  res.json(response);
}

const router = express.Router();

router.get("/", getAllEmployees);
router.post("/", createEmployee);

export default router;
