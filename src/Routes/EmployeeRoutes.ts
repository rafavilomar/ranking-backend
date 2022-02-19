import express from "express";
import EmployeeController from "../Controllers/EmployeeController";

const router = express.Router();

router.get("/", getAllEmployees);
router.post("/", createEmployee);

async function createEmployee(req: any, res: any) {
  let response = await EmployeeController.createEmployee(req.body);
  res.json(response);
}

async function getAllEmployees(req: any, res: any) {
  let response = await EmployeeController.getAllEmployees();
  res.json(response);
}
export default router;