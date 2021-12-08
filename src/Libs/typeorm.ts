import config from "../../config";
import { createConnection } from "typeorm";

const connection = createConnection({
  type: "postgres",
  host: config.postgress.host,
  port: config.postgress.port,
  username: config.postgress.user,
  password: config.postgress.password,
  database: config.postgress.database,
  entities: [__dirname + "../Entity/*.ts"],
  synchronize: true,
});

export default connection;
