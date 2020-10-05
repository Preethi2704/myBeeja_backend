import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import { EmployeeResolver } from "./resolvers/EmployeeResolver";
import { UserAdminResolver } from "./resolvers/UserAdminResolver";
async function main() {
  await createConnection();
  const schema = await buildSchema({ resolvers: [EmployeeResolver, UserAdminResolver] });
  const server = new ApolloServer({ schema });
  await server.listen(4000);
  console.log("Server has started!");
}

main();
