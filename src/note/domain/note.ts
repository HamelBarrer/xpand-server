export interface NoteState {
  noteStateId?: number;
  name: string;
}

export interface Note {
  noteId?: number;
  title: string;
  description: string;
  noteState?: NoteState;
  noteStateId: number;
  createdAt: Date;
}
