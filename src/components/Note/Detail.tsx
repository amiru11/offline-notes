import * as React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_NOTE } from "../../queries/note";

function NoteDetail(): JSX.Element {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
    return <p>Error :(</p>;
  }
  console.log("data", data);
  return <></>;
}

export default NoteDetail;
