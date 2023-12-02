import { Note } from '../domain/note';

export interface INoteService {
  getNote(noteId: number): Promise<Note | null>;
  getNotes(): Promise<Note[]>;
  createNote(note: Note): Promise<Note>;
  updatedNote(noteId: number, note: Note): Promise<Note>;
  deleteNote(noteId: number): Promise<Note>;
}
