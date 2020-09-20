import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Permissions", { schema: "bmyg_deal_data_dev" })
export class Permissions {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "path", nullable: true, length: 255 })
  path: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { name: "PersonId", nullable: true })
  personId: number | null;

  @Column("int", { name: "DealId", nullable: true })
  dealId: number | null;
}
