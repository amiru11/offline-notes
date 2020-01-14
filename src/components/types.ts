export type Note = {
  id: number;
  title: string;
  content: string;
};

export interface INotes {
  notes: Note[];
}

export interface INote {
  note: Note;
}
