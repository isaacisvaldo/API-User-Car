import express from "express";
import { config } from "dotenv";
import { routes } from "./router";
import { MongoClient } from "./databases/mongo";

config();

const main = async () => {
  const app = express();
  app.use(express.json());
  app.use(routes);
  const port = process.env.PORT || 3000;

  await MongoClient.connect();
  app.listen(port, () => console.log(`Rodadndo na Porta ${port}`));
};

main();
