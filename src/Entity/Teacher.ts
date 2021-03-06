import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Employee from "./Employee";
import School from "./School";
import Subject from "./Subject";
import Vote from "./Vote";

@Entity()
export default class Teacher extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64, nullable: false })
  fullname: string;

  @Column({ nullable: true })
  img?: string;

  @OneToMany(() => Vote, (vote) => vote.teacher)
  votes: Vote[];

  @OneToMany(() => Employee, (employee) => employee.teacher)
  employees: Employee[];

  positiveVotes?: number;

  negativeVotes?: number;

  subjects?: Subject[];

  schools?: School[];
}
