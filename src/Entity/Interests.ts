import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import School from "./School";
import Users from "./Users";

@Entity()
export default class Interests {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Users, (user) => user.id)
  @JoinColumn()
  userId: Users;

  @ManyToOne((type) => School, (school) => school.id)
  @JoinColumn()
  schoolId: School;
}
