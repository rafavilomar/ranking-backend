import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import School from "./School";
import Subject from "./Subject";
import Teacher from "./Teacher";

@Entity()
export default class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Subject, (subject) => subject.id, { nullable: false })
  @JoinColumn()
  subject: Subject;

  @ManyToOne((type) => School, (school) => school.id, { nullable: false })
  @JoinColumn()
  school: School;

  @ManyToOne((type) => Teacher, (teacher) => teacher.id, { nullable: false })
  @JoinColumn()
  teacher: Teacher;
}
