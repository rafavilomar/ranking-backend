import Employee from "../Entity/Employee";
import EmployeeService from "../Services/EmployeeService";

class EmployeeController {
  static async createEmployee(employee: Employee) {
    const response = await EmployeeService.createEmployee(employee);
    return response;
  }

  static async getAllEmployees() {
    const response = await EmployeeService.getAllEmployees();
    return response;
  }
}
export default EmployeeController;
