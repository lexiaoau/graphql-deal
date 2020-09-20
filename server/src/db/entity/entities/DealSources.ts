import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("DealSources", { schema: "bmyg_deal_data_dev" })
export class DealSources {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "first_name", nullable: true, length: 255 })
  firstName: string | null;

  @Column("varchar", { name: "last_name", nullable: true, length: 255 })
  lastName: string | null;

  @Column("varchar", { name: "first_name_cn", nullable: true, length: 255 })
  firstNameCn: string | null;

  @Column("varchar", { name: "last_name_cn", nullable: true, length: 255 })
  lastNameCn: string | null;

  @Column("text", { name: "phone", nullable: true })
  phone: string | null;

  @Column("text", { name: "email", nullable: true })
  email: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;
}
