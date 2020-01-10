import * as React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_NOTES } from "../queries/note";

import { INote } from "./types";

import NoteItem from "./NoteItem";
import { ListBlock } from "../styles/noteList";

const NoteList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_NOTES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ListBlock>
      <header>
        <h1>Simple Notes</h1>
        <Link to={"/note/add"}>
          <button>ADD NOTE</button>
        </Link>
      </header>
      {data.length &&
        data.map((note: INote) => <NoteItem {...note} key={note.id} />)}
    </ListBlock>
  );
};

export default NoteList;
