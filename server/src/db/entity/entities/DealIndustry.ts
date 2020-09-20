import { Column, Entity } from "typeorm";

@Entity("DealIndustry", { schema: "bmyg_deal_data_dev" })
export class DealIndustry {
  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { primary: true, name: "DealId" })
  dealId: number;

  @Column("int", { primary: true, name: "IndustryId" })
  industryId: number;
}
