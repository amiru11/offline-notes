import { ApolloCache, Resolvers } from "@apollo/client";
import { NOTE_FRAGMENT } from "./fragments/note";
import { GET_NOTES } from "./queries/note";
import { saveNotes } from "./lib/localStorage";

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
    createNote(title: String!, content: String!): Note
    editNote(id: Int!, title: String!, content: String!): Note
  }
  type Note {
    id: Int!
    title: String!
    content: String!
  }
`
];

type ResolverFn = (parent: any, args: any, { cache }: any) => any;

interface ResolverMap {
  [field: string]: ResolverFn;
}

interface AppResolvers extends Resolvers {
  Query: ResolverMap;
}

export const resolvers: AppResolvers = {
  Query: {
    note: (_, { id }: { id: string }, { cache }) => {
      const noteId = cache.config.dataIdFromObject({
        __typename: "Note",
        id
      });
      const note = cache.readFragment({ fragment: NOTE_FRAGMENT, id: noteId });
      return note;
    }
  },
  Mutation: {
    createNote: (_, args, { cache }) => {
      const { notes } = cache.readQuery({ query: GET_NOTES });
      const { title, content } = args;
      const newNote = {
        __typename: "Note",
        id: notes.length + 1,
        title,
        content
      };
      cache.writeData({
        data: {
          notes: [newNote, ...notes]
        }
      });
      const response = cache.readQuery({ query: GET_NOTES });
      console.log("response", response);
      saveNotes(cache);

      return newNote;
    }
  }
};
