import { ObjectType, Field, Int, ID } from "type-graphql";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
    ManyToOne,
    OneToMany,
} from "typeorm";

@ObjectType()
@Entity("Deals", { schema: "bmyg_deal_data_dev" })
export class Deals extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Field(() => String)
    @Column("varchar", { name: "name", nullable: true, length: 255 })
    name: string | null;

    @Field(() => Int)
    @Column("int", { name: "assignee", nullable: true })
    assignee: number | null;

    @Field(() => Int)
    @Column("int", { name: "last_modified_by", nullable: true })
    lastModifiedBy: number | null;

    @Field(() => Int)
    @Column("int", { name: "external_deal_source", nullable: true })
    externalDealSource: number | null;

    @Field(() => Int)
    @Column("int", { name: "internal_deal_source", nullable: true })
    internalDealSource: number | null;

    @Field(() => String)
    @Column("varchar", { name: "status", nullable: true, length: 255 })
    status: string | null;

    @Field(() => String)
    @Column("datetime", { name: "entry_date", nullable: true })
    entryDate: Date | null;

    @Field(() => String)
    @Column("datetime", { name: "createdAt" })
    createdAt: Date;

    @Field(() => String)
    @Column("datetime", { name: "updatedAt" })
    updatedAt: Date;

    @Field(() => String)
    @Column("varchar", { name: "path", nullable: true, length: 255 })
    path: string | null;

    @Field(() => Int)
    @Column("int", { name: "StatusId", nullable: true })
    statusId: number | null;

    @Field(() => String)
    @Column("datetime", { name: "start_date", nullable: true })
    startDate: Date | null;

    @Field(() => String)
    @Column("datetime", { name: "deadline_date", nullable: true })
    deadlineDate: Date | null;

    @Field(() => String)
    @Column("datetime", { name: "complete_date", nullable: true })
    completeDate: Date | null;
}
