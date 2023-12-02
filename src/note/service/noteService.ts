import { Note, NoteState } from '../domain/note';
import { NoteUseCase } from '../domain/noteUsecase';
import { INoteService } from '../interfaces/inoteService';

export class NoteService implements INoteService {
  constructor(private readonly noteUseCase: NoteUseCase) {}

  async getNoteStates(): Promise<NoteState[]> {
    return this.noteUseCase.listNoteState();
  }

  async getNote(noteId: number): Promise<Note | null> {
    return this.noteUseCase.readNote(noteId);
  }

  async getNotes(): Promise<Note[]> {
    return this.noteUseCase.listNotes();
  }

  async createNote(note: Note): Promise<Note> {
    return this.noteUseCase.saveNote(note);
  }

  async updatedNote(noteId: number, note: Note): Promise<Note> {
    return this.noteUseCase.updateNote(noteId, note);
  }

  async deleteNote(noteId: number): Promise<Note> {
    return this.noteUseCase.removeNote(noteId);
  }
}
