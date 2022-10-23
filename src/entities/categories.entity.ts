import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Propertie from "./properties.entity";

@Entity("categories")
class Categories {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 100, unique: true })
  name: string;

  @OneToMany(() => Propertie, (propertie) => propertie.category)
  properties: Propertie[];
}

export default Categories;
