export type INote = {
  id: number;
  title: string;
  content: string;
};

export interface INotes {
  notes: INote[];
}
