import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Employee from "./Employee";
import Interests from "./Interests";

@Entity()
export default class School {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64 })
  name: string;

  @Column({ length: 30, unique: true })
  category: string;

  @OneToMany((type) => Interests, (interest) => interest.id)
  interests: Interests[];

  @OneToMany((type) => Employee, (employee) => employee.id)
  employees: Employee[];
}
