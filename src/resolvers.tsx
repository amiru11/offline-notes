import { ApolloCache, Resolvers } from "@apollo/client";
import { NOTE_FRAGMENT } from "./fragments/note";
import { GET_NOTES } from "./queries/note";

// How to Our schema looks
export const typeDefs = [
  `
  schema {
    query: Query
    mutation: Mutation
  }
  type Query {
    notes: [Note]!
    note(id: Int!): Note
  }
  type Mutation {
    createNote(title: String!, content: String!): Boolean
    editNote(id: Int!, title: String!, content: String!): Boolean
  }
  type Note {
    id: Int!
    title: String!
    content: String!
  }
`
];

type ResolverFn = (
  parent: any,
  args: any,
  { cache }: { cache: ApolloCache<any> }
) => any;

interface ResolverMap {
  [field: string]: ResolverFn;
}

interface AppResolvers extends Resolvers {
  Query: ResolverMap;
}

export const resolvers: AppResolvers = {
  Query: {
    note: (_, { id }: { id: string }, { cache }) => {
      const note = cache.readFragment({ fragment: NOTE_FRAGMENT, id });
      return note;
    }
  },
  Mutation: {
    createNote: (_, args, { cache }) => {
      const { notes } = cache.readQuery({ query: GET_NOTES });
      const { title, content } = args;
      const newNote = {
        id: notes.length + 1,
        title,
        content
      };
      cache.writeData({
        data: {
          notes: [newNote, ...notes]
        }
      });

      return newNote;
    }
  }
};
