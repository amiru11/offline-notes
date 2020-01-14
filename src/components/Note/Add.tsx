import * as React from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_NOTE } from "../../mutations/note";
import { INote } from "../types";
import Editor from "../Editor";

function AddNote(): JSX.Element {
  const history = useHistory();
  const [createNote] = useMutation<{ createNote: INote }>(CREATE_NOTE);

  const onSave = async (title: string, content: string): Promise<void> => {
    try {
      console.log("onSave");
      console.log("title", title);
      console.log("content", content);
      const note = await createNote({ variables: { title, content } });
      if (note) {
        console.log(note);
        // history.push("/");
      } else {
        throw new Error("Error!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return <Editor onSave={onSave} />;
}

export default AddNote;