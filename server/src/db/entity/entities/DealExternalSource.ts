import { Column, Entity } from "typeorm";

@Entity("DealExternalSource", { schema: "bmyg_deal_data_dev" })
export class DealExternalSource {
  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { primary: true, name: "DealId" })
  dealId: number;

  @Column("int", { primary: true, name: "DealSourceId" })
  dealSourceId: number;
}
