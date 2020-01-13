import { ApolloCache } from "@apollo/client";
import { GET_NOTES } from "../queries/note";
import { INotes } from "../components/types";

export const saveNotes = (cache: ApolloCache<any>): void => {
  const notes = cache.readQuery<INotes>({ query: GET_NOTES })!.notes;
  const jsonNotes = JSON.stringify(notes);
  try {
    localStorage.setItem("notes", jsonNotes);
  } catch (err) {
    console.error(err);
  }
};

export const restoreNotes = () => {
  const notes = localStorage.getItem("notes");
  if (notes) {
    try {
      const parsedNotes = JSON.parse(notes);
      return parsedNotes;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  return [];
};
