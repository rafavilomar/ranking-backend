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

  @Column({ length: 64, nullable: false, unique: true })
  email: string;

  @Column({ nullable: true })
  img?: string;

  @OneToOne(() => Account, idAccount => idAccount.user, { nullable: false })
  @JoinColumn()
  idAccount: Account;

  @OneToMany(() => Vote, (vote) => vote.users)
  votes: Vote[];

  @OneToMany(() => Interests, (interest) => interest.users)
  interests: Interests[];
}
