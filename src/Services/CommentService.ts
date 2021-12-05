import { Pool } from "pg";
import pool from "../Libs/postgres.pool";

class CommentService {

  connection: Pool;
  constructor() {
    this.connection = pool
  }

  async getCommentByTeacher(){
    const response = await this.connection.query(
      `SELECT 
        v.id,
        v.vote,
        v.comment,
        v.timestamp,
        a.username,
        u.img
      FROM vote v
      INNER JOIN users u ON v.idusers = u.id
      INNER JOIN account a ON u.idaccount = a.id
      WHERE v.idteacher = 1;`
    );

    return response.rows;
  }
}
export default CommentService;