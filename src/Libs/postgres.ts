import config from "../../config";
import { Client } from "pg";

const client = new Client({
  host: config.postgress.host,
  port: config.postgress.port,
  user: config.postgress.user,
  password: config.postgress.password,
  database: config.postgress.database,
});

const getConnection = async () => {
  await client.connect();
  return client;
};

export default getConnection;
