import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Industries", { schema: "bmyg_deal_data_dev" })
export class Industries {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "desp", nullable: true, length: 255 })
  desp: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { name: "key", nullable: true })
  key: number | null;
}
