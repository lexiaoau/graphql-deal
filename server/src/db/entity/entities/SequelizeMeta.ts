import { Column, Entity, Index } from "typeorm";

@Index("name", ["name"], { unique: true })
@Entity("SequelizeMeta", { schema: "bmyg_deal_data_dev" })
export class SequelizeMeta {
  @Column("varchar", { primary: true, name: "name", length: 255 })
  name: string;
}
