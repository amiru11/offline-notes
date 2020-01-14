import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_NOTE } from "../../queries/note";
import { EDIT_NOTE } from "../../mutations/note";

import { Note, INote } from "../types";

import Editor from "../Editor";
import { Container, Button } from "../../styles/common";

function NoteEdit(): JSX.Element {
  const history = useHistory();
  const { id } = useParams();
  const { loading, error, data } = useQuery<INote>(GET_NOTE, {
    variables: { id }
  });
  const [editNote] = useMutation<{ editNote: Note }>(EDIT_NOTE);

  const onSave = async ({
    id,
    title,
    content
  }: {
    id: string;
    title: string;
    content: string;
  }): Promise<void> => {
    try {
      const note = await editNote({ variables: { id, title, content } });
      if (note) {
        // history.push("/");
      } else {
        throw new Error("Error!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loading)
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );
  if (error) {
    console.error(error);
    return (
      <Container>
        <p>Error :(</p>
      </Container>
    );
  }
  if (!data?.note)
    return (
      <Container>
        <p>
          Wrong Access!{" "}
          <span role="img" aria-label="🙅🏻‍♂️">
            🙅🏻‍♂️
          </span>
        </p>
        <Link to={`/`}>
          <Button>HOME</Button>
        </Link>
      </Container>
    );

  const { note } = data;
  return (
    <Container>
      <Editor
        id={note.id}
        title={note.title}
        content={note.content}
        onSave={onSave}
      />
    </Container>
  );
}

export default NoteEdit;
