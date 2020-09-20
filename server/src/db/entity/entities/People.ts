import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("People", { schema: "bmyg_deal_data_dev" })
export class People {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "account", nullable: true, length: 255 })
  account: string | null;

  @Column("varchar", { name: "first_name", nullable: true, length: 255 })
  firstName: string | null;

  @Column("varchar", { name: "last_name", nullable: true, length: 255 })
  lastName: string | null;

  @Column("varchar", { name: "first_name_cn", nullable: true, length: 255 })
  firstNameCn: string | null;

  @Column("varchar", { name: "last_name_cn", nullable: true, length: 255 })
  lastNameCn: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;
}
