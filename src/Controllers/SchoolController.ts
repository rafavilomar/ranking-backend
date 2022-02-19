import School from "../Entity/School";
import SchoolService from "../Services/SchoolService";

class SchoolController {
  static async createSchool(school: School) {
    let response = await SchoolService.createSchool(school);
    return response;
  }

  static async getAllSchools() {
    let response = await SchoolService.getAllSchools();
    return response;
  }
}
export default SchoolController;
