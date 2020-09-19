import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

const main = async () => {
    const app = express();

    app.get("/", (_, res) => {
        res.send("hello wor");
    });

    const port = "4000"; // process.env.PORT

    app.listen(parseInt(port), () => {
        console.log("server started on localhost:4000");
    });
};

main().catch((err) => {
    console.error(err);
});
