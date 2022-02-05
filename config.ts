import {config as envConfig} from "dotenv";

envConfig()
const config = {
  api: {
    port: process.env.API_PORT || '',
    secret: process.env.JWT_SECRET || '',
    time: parseInt(process.env.JWT_HOURS) || parseInt("")
  },
  postgress: {
    host: process.env.POSTGRES_HOST || '',
    user: process.env.POSTGRES_USER || '',
    password: process.env.POSTGRES_PASS || '',
    database: process.env.POSTGRES_DB || '',
    port: parseInt(process.env.POSTGRES_SRV_PORT) || parseInt("")
  },
  mysql: {
    host: process.env.MYSQL_HOST || '',
    user: process.env.MYSQL_USER || '',
    password: process.env.MYSQL_PASS || '',
    database: process.env.MYSQL_DB || '',
    port: parseInt(process.env.MYSQL_PORT) || parseInt("")
  }
}
export default config; 