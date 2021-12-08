import { Pool } from "pg";
import Vote from "../Entity/Vote";
import typeormConnection from "../Libs/typeorm";
import pool from "../Libs/postgres.pool";
import { Repository } from "typeorm";
import Teacher from "../Entity/Teacher";

class VoteService {
  connection: Repository<Vote>;
  constructor() {
    typeormConnection
      .then((c) => (this.connection = c.getRepository(Vote)))
      .catch((e) => console.error(e));
  }

  async makeVote() {
    const response = await this.connection.query(
      `INSERT INTO vote (idteacher, idusers, vote, comment, timestamp)
      VALUES (1,1,true,'Excelente profesor!!.', CURRENT_DATE);`
    );
    return response.rows;
  }

  async getCommentByTeacher() {
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

  async getVotesByTeacher(teacher: Teacher, vote: boolean) {
    const response = await this.connection.find({
      teacher: teacher,
      vote: vote,
    });
    return response.length;
  }
}
export default VoteService;
