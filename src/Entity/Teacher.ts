import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Employee from "./Employee";
import Vote from "./Vote";

@Entity()
export default class Teacher extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64 })
  fullname: string;

  @Column({ nullable: true })
  img?: string;

  @OneToMany((type) => Vote, (vote) => vote.teacher)
  votes: Vote[];

  @OneToMany((type) => Employee, (employee) => employee.id)
  employees: Employee[];

  positiveVotes?: number;
  negativeVotes?: number;
}
