import Interests from "../Entity/Interests";
import InterestService from "../Services/InterestService";

class InterestController {
  static async createInterest(interests: Interests) {
    const response = await InterestService.createInterest(interests);
    return response;
  }

  static async getAllInterests() {
    const response = await InterestService.getAllInterest();
    return response;
  }
}
export default InterestController;
