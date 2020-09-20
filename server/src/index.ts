import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { HelloResolver } from './resolvers/hello';
import { DealResolver } from './resolvers/deal';

import { createConnection , getManager } from "typeorm";
// import typeormConfig from "../../ormconfig.json";
import { Deals } from "./db/entity/entities/Deals";
// graphql-deal/server/src/db/entity/entities/Deals.ts
const main = async () => {
    const app = express();

    app.get("/", (_, res) => {
        res.send("hello wor");
    });

    const conn = await createConnection();

    const userRepository = conn.getRepository(Deals);
    const users = await userRepository.find();
    // console.log(users);
    console.log(users.length);

    // const d1 = await Deals.findOne(1);
    const d1 = await userRepository.find({ where: { id: 100 } });
    console.log(d1);

    // const entityManager = getManager();

    // const deal = await entityManager.findOne(Deals, 1);
    // console.log(deal);

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, DealResolver],
            validate: false,
        }),
    });

    apolloServer.applyMiddleware({ app });

    const port = "4000"; // process.env.PORT

    app.listen(parseInt(port), () => {
        console.log("server started on localhost:4000");
    });
};;;

main().catch((err) => {
    console.error(err);
});
