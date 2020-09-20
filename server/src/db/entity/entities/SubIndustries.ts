import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("SubIndustries", { schema: "bmyg_deal_data_dev" })
export class SubIndustries {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "desp", nullable: true, length: 255 })
  desp: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { name: "IndustryId", nullable: true })
  industryId: number | null;
}
