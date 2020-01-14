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

export const EDIT_NOTE = gql`
  mutation editNote($id: Int!, $title: String!, $content: String!) @client {
    editNote(id: $id, title: $title, content: $content) {
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
