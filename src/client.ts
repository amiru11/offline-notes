import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject
} from "@apollo/client";
import { typeDefs, resolvers } from "./resolvers";
import { restoreNotes } from "./lib/localStorage";
const cache = new InMemoryCache();

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  resolvers,
  typeDefs
});

cache.writeData({
  data: {
    notes: restoreNotes()
  }
});

export default client;
