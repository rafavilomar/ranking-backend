import {
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import School from "./School";
import Users from "./Users";

@Entity()
@Unique("InterestsUQ1", ["school", "users"])
export default class Interests {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (user) => user.id, { nullable: false })
  @JoinColumn()
  users: Users;

  @ManyToOne(() => School, (school) => school.id, { nullable: false })
  @JoinColumn()
  school: School;
}
