import {
    Arg,
    Ctx,
    Field,
    FieldResolver,
    InputType,
    Int,
    Mutation,
    ObjectType,
    Query,
    Resolver,
    Root,
    UseMiddleware,
} from "type-graphql";
import { getConnection, getManager } from "typeorm";
import { Deals } from "../db/entity/entities/Deals";

@ObjectType()
class DbDeals {
    @Field(() => [Deals])
    deals: Deals[];
}

@Resolver()
export class DealResolver {
    // @Query(() => DbDeals)
    // async getDeals() {
    //     const entityManager = getManager(); // you can also get it via getConnection().manager
    //     const user = await entityManager.find(Deals);
    //     return user;
    // }

    @Query(() => Deals)
    async getOneDeal() {
        // const entityManager = getManager(); // you can also get it via getConnection().manager
        // const user = await entityManager.findOne(Deals, 1);

        const userRepository = getConnection().getRepository(Deals);
        const user = await userRepository.findOne(101);
        return user;

        // const d1 = await Deals.findOne(100);
        // return d1;
    }

    @Query(() => [Deals])
    async getAllDeal() {
        // const entityManager = getManager(); // you can also get it via getConnection().manager
        // const user = await entityManager.findOne(Deals, 1);

        const userRepository = getConnection().getRepository(Deals);
        const user = await userRepository.find();
        return user;

        // const d1 = await Deals.findOne(100);
        // return d1;
    }
}
