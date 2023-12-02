import { PrismaClient } from '@prisma/client';
import { Note, NoteState } from '../domain/note';
import { NoteRepository } from '../domain/noteRepository';

const prisma = new PrismaClient();

export class NoteRepositoryImpl implements NoteRepository {
  async listNoteState(): Promise<NoteState[]> {
    return await prisma.noteStates.findMany({
      select: {
        noteStateId: true,
        name: true,
      },
    });
  }

  async read(noteId: number): Promise<Note | null> {
    return await prisma.notes.findUnique({
      select: {
        noteId: true,
        title: true,
        description: true,
        noteStateId: true,
        noteState: {
          select: {
            noteStateId: true,
            name: true,
          },
        },
        createdAt: true,
      },
      where: { noteId },
    });
  }

  async list(): Promise<Note[]> {
    return await prisma.notes.findMany({
      select: {
        noteId: true,
        title: true,
        description: true,
        noteStateId: true,
        noteState: {
          select: {
            noteStateId: true,
            name: true,
          },
        },
        createdAt: true,
      },
    });
  }

  async save(note: Note): Promise<Note> {
    const { title, description, noteStateId } = note;

    return await prisma.notes.create({
      data: { title, description, noteStateId },
      select: {
        noteId: true,
        title: true,
        description: true,
        noteStateId: true,
        noteState: {
          select: {
            noteStateId: true,
            name: true,
          },
        },
        createdAt: true,
      },
    });
  }

  async update(noteId: number, note: Note): Promise<Note> {
    const { title, description, noteStateId } = note;

    return await prisma.notes.update({
      data: { title, description, noteStateId },
      where: { noteId },
      select: {
        noteId: true,
        title: true,
        description: true,
        noteStateId: true,
        noteState: {
          select: {
            noteStateId: true,
            name: true,
          },
        },
        createdAt: true,
      },
    });
  }

  async remove(noteId: number): Promise<Note> {
    return await prisma.notes.delete({
      select: {
        noteId: true,
        title: true,
        description: true,
        noteStateId: true,
        noteState: {
          select: {
            noteStateId: true,
            name: true,
          },
        },
        createdAt: true,
      },
      where: { noteId },
    });
  }
}
