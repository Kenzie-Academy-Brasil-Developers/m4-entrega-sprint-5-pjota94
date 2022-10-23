import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  district: string;

  @Column({ length: 8 })
  zipCode: string;

  @Column()
  number: string;

  @Column()
  city: string;

  @Column({ length: 2 })
  state: string;
}

export default Address;
