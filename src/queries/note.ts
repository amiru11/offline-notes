import { gql } from "@apollo/client";
import { NOTE_FRAGMENT } from "../fragments/note";

export const GET_NOTES = gql`
  {
    notes @client {
      id
      title
      content
    }
  }
`;

export const GET_NOTE = gql`
  query getNote($id: Int!) {
    note(id: $id) @client {
      ...NoteParts
    }
  }
  ${NOTE_FRAGMENT}
`;
