import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Users from "./Users";

@Entity()
export default class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 32, nullable: false, unique: true })
  username: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  timestamp: Date = new Date();

  @OneToOne(() => Users, user => user.idAccount)
  user: Users;
}
