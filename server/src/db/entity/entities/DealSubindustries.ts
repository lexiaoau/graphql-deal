import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("DealSubindustries", { schema: "bmyg_deal_data_dev" })
export class DealSubindustries {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "DealId", nullable: true })
  dealId: number | null;

  @Column("int", { name: "SubindustryId", nullable: true })
  subindustryId: number | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;
}
