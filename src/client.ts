import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject
} from "@apollo/client";
import { defaultDataIdFromObject } from "apollo-cache-inmemory";
import { typeDefs, resolvers } from "./resolvers";
import { restoreNotes } from "./lib/localStorage";
const cache = new InMemoryCache({
  dataIdFromObject: defaultDataIdFromObject
});

cache.writeData({
  data: {
    notes: restoreNotes()
  }
});
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  resolvers,
  typeDefs
});

export default client;
