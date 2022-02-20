import School from "../Entity/School";
import SchoolService from "../Services/SchoolService";

class SchoolController {
  static async createSchool(school: School) {
    const response = await SchoolService.createSchool(school);
    return response;
  }

  static async getAllSchools() {
    const response = await SchoolService.getAllSchools();
    return response;
  }
}
export default SchoolController;
