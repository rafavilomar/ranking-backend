import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import Teacher from "./Teacher";
import Users from "./Users";

@Entity()
@Unique("VoteUQ1", ["teacher", "users"])
export default class Vote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  vote: boolean;

  @Column({ nullable: true })
  comment?: string;

  @Column({ nullable: false })
  timestamp: Date = new Date();

  @ManyToOne((type) => Teacher, (teacher) => teacher.id, { nullable: false })
  @JoinColumn()
  teacher: Teacher;

  @ManyToOne((type) => Users, (user) => user.id, { nullable: false })
  @JoinColumn()
  users: Users;
}
