import { config as envConfig } from "dotenv";

envConfig();
const config = {
  api: {
    port: process.env.PORT || "",
    secret: process.env.JWT_SECRET || "",
    time: Number(process.env.JWT_HOURS) || Number(""),
  },
  postgress: {
    host: process.env.POSTGRES_HOST || "",
    user: process.env.POSTGRES_USER || "",
    password: process.env.POSTGRES_PASS || "",
    database: process.env.POSTGRES_DB || "",
    port: Number(process.env.POSTGRES_SRV_PORT) || Number(""),
  },
  mysql: {
    host: process.env.MYSQL_HOST || "",
    user: process.env.MYSQL_USER || "",
    password: process.env.MYSQL_PASS || "",
    database: process.env.MYSQL_DB || "",
    port: Number(process.env.MYSQL_PORT) || Number(""),
  },
};
export default config;
