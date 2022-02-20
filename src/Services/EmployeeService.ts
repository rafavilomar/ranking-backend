import typeormConnection from "../Libs/typeorm";

// ENTITES
import Employee from "../Entity/Employee";

class EmployeeService {
  static async createEmployee(employee: Employee) {
    const connection = (await typeormConnection).getRepository(Employee);
    return connection.save(employee);
  }

  static async getAllEmployees() {
    const connection = (await typeormConnection).getRepository(Employee);
    return connection.find();
  }
}
export default EmployeeService;
