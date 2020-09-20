import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Logins", { schema: "bmyg_deal_data_dev" })
export class Logins {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("text", { name: "token", nullable: true })
  token: string | null;

  @Column("bigint", { name: "expire", nullable: true })
  expire: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { name: "PersonId", nullable: true })
  personId: number | null;
}
