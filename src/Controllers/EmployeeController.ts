import Employee from "../Entity/Employee";
import EmployeeService from "../Services/EmployeeService";

class EmployeeController {
  static async createEmployee(employee: Employee) {
    let response = await EmployeeService.createEmployee(employee);
    return response;
  }

  static async getAllEmployees() {
    let response = await EmployeeService.getAllEmployees();
    return response;
  }
}
export default EmployeeController;
