import { gql } from "@apollo/client";

// ReUse
export const NOTE_FRAGMENT = gql`
  fragment NoteParts on Note {
    id
    title
    content
  }
`;
