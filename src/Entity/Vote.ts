import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Teacher from "./Teacher";
import Users from "./Users";

@Entity()
export default class Vote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vote: boolean;

  @Column({ nullable: true })
  comment?: string;

  @Column()
  timestamp: Date = new Date();

  @ManyToOne((type) => Teacher, (teacher) => teacher.id)
  @JoinColumn()
  teacher: Teacher;

  @ManyToOne((type) => Users, (user) => user.id)
  @JoinColumn()
  users: Users;
}
