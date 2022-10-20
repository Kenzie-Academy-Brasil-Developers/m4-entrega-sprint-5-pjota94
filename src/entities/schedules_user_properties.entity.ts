import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Propertie from "./properties.entity";
import User from "./user.entity";

@Entity("schedules_user_properties")
class Schedules_user_properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => Propertie)
  property: Propertie;

  @ManyToOne(() => User)
  user: User;
}

export default Schedules_user_properties;
