import { Note } from './note';
import { NoteRepository } from './noteRepository';

export class NoteUseCase {
  constructor(private readonly noteRepository: NoteRepository) {}

  async readNote(noteId: number) {
    return this.noteRepository.read(noteId);
  }

  async listNotes() {
    return this.noteRepository.list();
  }

  async saveNote(note: Note) {
    return this.noteRepository.save(note);
  }

  async updateNote(noteId: number, note: Note) {
    return this.noteRepository.update(noteId, note);
  }

  async removeNote(noteId: number) {
    return this.noteRepository.remove(noteId);
  }
}
