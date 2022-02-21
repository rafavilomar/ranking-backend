import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Employee from "./Employee";
import Interests from "./Interests";

@Entity()
export default class School {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64, nullable: false })
  name: string;

  @Column({ length: 30, unique: true })
  category: string;

  @OneToMany(() => Interests, (interest) => interest.school)
  interests: Interests[];

  @OneToMany(() => Employee, (employee) => employee.school)
  employees: Employee[];
}
