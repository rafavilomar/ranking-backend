import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Account from "./Account";
import Interests from "./Interests";
import Vote from "./Vote";

@Entity()
export default class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64 })
  email: string;

  @Column({ nullable: true })
  img?: string;

  @OneToOne((type) => Account)
  @JoinColumn()
  idAccount: Account;

  @OneToMany((type) => Vote, (vote) => vote.users)
  votes: Vote[];
  
  @OneToMany((type) => Interests, (interest) => interest.users)
  interests: Interests[];
}
