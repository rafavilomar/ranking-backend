import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
