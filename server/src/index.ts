import "reflect-metadata"
import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { schema } from "./Schema/index";
import { createConnection, DataSource } from "typeorm";
import { Users } from "./Entities/Users";

const main = async () => {
  await createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "4234",
    database: "graphql",
    synchronize: true,
    logging: true,
    entities: [Users],
    subscribers: [],
    migrations: [],
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );
  app.listen(5000, () => console.log("все норм"));
};

main().catch((err) => console.log(err));
