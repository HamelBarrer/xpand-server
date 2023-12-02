import { Note, NoteState } from './note';

export interface NoteRepository {
  listNoteState(): Promise<NoteState[]>;
  read(noteId: number): Promise<Note | null>;
  list(): Promise<Note[]>;
  save(note: Note): Promise<Note>;
  update(noteId: number, note: Note): Promise<Note>;
  remove(noteId: number): Promise<Note>;
}
