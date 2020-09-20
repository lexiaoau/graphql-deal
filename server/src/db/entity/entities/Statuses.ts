import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Statuses", { schema: "bmyg_deal_data_dev" })
export class Statuses {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "desp", nullable: true, length: 255 })
  desp: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;
}
