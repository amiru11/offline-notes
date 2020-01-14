import * as React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_NOTES } from "../../queries/note";

import { INote, INotes } from "../types";

import { Container } from "../../styles/common";
import { ItemBlock, ItemContents } from "../../styles/noteItem";

const NoteList: React.FC = () => {
  const { loading, error, data } = useQuery<INotes>(GET_NOTES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <Container>
      <header>
        <h1>Simple Notes</h1>
        <Link to={"/note/add"}>
          <button>ADD NOTE</button>
        </Link>
      </header>
      {data && data.notes.length
        ? data.notes.map((note: INote) => (
            <ItemBlock key={note.id}>
              <ItemContents>
                <h2>
                  <Link to={`/note/${note.id}`}>{note.title}</Link>
                </h2>
              </ItemContents>
            </ItemBlock>
          ))
        : ""}
    </Container>
  );
};

export default NoteList;
