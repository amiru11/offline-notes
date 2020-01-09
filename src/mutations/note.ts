import { gql } from "@apollo/client";

export const CREATE_NOTE = gql`
  mutation createNote($title: String!, $content: String!) @client {
    createNote(title: $title, content: $content) {
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
