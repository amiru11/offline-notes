import * as React from "react";
import { Link } from "react-router-dom";

import { INote } from "./types";

import { ItemBlock, ItemContents } from "../styles/noteItem";

function NoteItem(note: INote): JSX.Element {
  return (
    <ItemBlock>
      <ItemContents>
        <h2>
          <Link to={`/note/${note.id}`}>{note.title}</Link>
        </h2>
      </ItemContents>
    </ItemBlock>
  );
}

export default NoteItem;
