import * as React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Markdown from "markdown-to-jsx";
import { GET_NOTE } from "../../queries/note";

import { INote } from "../types";

import { Container } from "../../styles/common";
import { TitleContainer, Title, Button } from "../../styles/noteDetail";

function NoteDetail(): JSX.Element {
  const { id } = useParams();
  const { loading, error, data } = useQuery<INote>(GET_NOTE, {
    variables: { id }
  });
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
    return <p>Error :(</p>;
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
      <TitleContainer>
        <Title>{note.title}</Title>
        <Link to={`/note/edit/${note.id}`}>
          <button>EDIT</button>
        </Link>
      </TitleContainer>
      <Markdown children={note.content} />
    </Container>
  );
}

export default NoteDetail;
