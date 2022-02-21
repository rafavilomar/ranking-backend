import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Employee from "./Employee";

@Entity()
export default class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64, unique: true, nullable: false })
  name: string;

  @OneToMany(() => Employee, (employee) => employee.subject)
  employees: Employee[];
}
