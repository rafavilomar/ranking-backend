import typeormConnection from "../Libs/typeorm";

//ENTITES
import Interests from "../Entity/Interests";

class InterestService {
  static async createInterest(interests: Interests) {
    const connection = (await typeormConnection).getRepository(Interests);
    return await connection.save(interests);
  }

  static async getAllInterest() {
    const connection = (await typeormConnection).getRepository(Interests);
    return await connection.find();
  }
}
export default InterestService;
