import dbConnect from "$lib/database/dbconnect";
import Article from "$lib/models/Article";
import type { EndpointOutput, RequestHandler } from "@sveltejs/kit";
import { ApolloServer, gql } from "apollo-server-lambda";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  tracing: true,
});

const graphqlHandler = apolloServer.createHandler();

const handler: RequestHandler = async (args) => {
  await dbConnect();
  return await new Promise<EndpointOutput>((resolve, reject) => {
    graphqlHandler(
      {
        httpMethod: args.method,
        headers: args.headers,
        path: args.path,
        body: args.rawBody as string,
      } as any,
      {} as any,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve({
            status: result.statusCode,
            body: result.body,
            headers: result.headers as any,
          });
        }
      }
    ) as any;
  });
};

export const head = handler;
export const get = handler;
export const post = handler;
