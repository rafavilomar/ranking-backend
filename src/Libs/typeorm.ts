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
  type: "mysql",
  host: config.mysql.host,
  port: config.mysql.port,
  username: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
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
