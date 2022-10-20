import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import Address from "./addresses.entity";
import Categories from "./categories.entity";
import Schedules_user_properties from "./schedules_user_properties.entity";

@Entity("properties")
class Propertie {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  value: number;

  @Column({ type: "int" })
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @OneToMany(
    () => Schedules_user_properties,
    (schedules_user_properties) => schedules_user_properties.property
  )
  schedulesProperty: Schedules_user_properties[];

  @ManyToOne(() => Categories)
  categories: Categories;
}

export default Propertie;
