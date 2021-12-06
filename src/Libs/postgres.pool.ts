// const { Pool } = require('pg');
import { Pool } from "pg";
import config from "../../config";

const pool = new Pool({
  host: config.postgress.host,
  port: config.postgress.port,
  user: config.postgress.user,
  password: config.postgress.password,
  database: config.postgress.database,
});

export default pool;