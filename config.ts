import {config as envConfig} from "dotenv";

envConfig()
const config = {
  api: {
    port: process.env.API_PORT || ''
  },
  postgress: {
    host: process.env.POSTGRES_HOST || '',
    user: process.env.POSTGRES_USER || '',
    password: process.env.POSTGRES_PASS || '',
    database: process.env.POSTGRES_DB || '',
    port: parseInt(process.env.POSTGRES_SRV_PORT) || parseInt("")
  }
}
export default config; 