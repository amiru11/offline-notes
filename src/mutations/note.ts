import { gql } from "@apollo/client";

export const CREATE_NOTE = gql`
  mutation createNote($title: String!, $content: String!) {
    createNote(title: $title, content: $content) @client {
      note {
        ... on Note {
          id
          title
          content
        }
      }
    }
  }
`;
