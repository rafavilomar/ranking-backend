import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Employee {
  @PrimaryGeneratedColumn()
  id: number;
}
