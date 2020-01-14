import * as React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_NOTE } from "../../queries/note";
import { EDIT_NOTE } from "../../mutations/note";
import { INote } from "../types";
import Editor from "../Editor";

import { Container } from "../../styles/common";

function NoteEdit(): JSX.Element {
  const { id } = useParams();
  return <></>;
}

export default NoteEdit;
