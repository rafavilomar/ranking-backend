import config from "../../config";
import { createConnection } from "typeorm";

// ENTITIES
import Teacher from "../Entity/Teacher";
import Users from "../Entity/Users";
import Account from "../Entity/Account";
import Vote from "../Entity/Vote";
import Employee from "../Entity/Employee";
import Interests from "../Entity/Interests";
import School from "../Entity/School";
import Subject from "../Entity/Subject";

const typeormConnection = createConnection({
  type: "postgres",
  host: config.postgress.host,
  port: config.postgress.port,
  username: config.postgress.user,
  password: config.postgress.password,
  database: config.postgress.database,
  entities: [
    Teacher,
    Users,
    Account,
    Vote,
    Employee,
    Interests,
    School,
    Subject,
  ],
  synchronize: true,
});

export default typeormConnection;
