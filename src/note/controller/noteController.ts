import { Request, Response } from 'express';
import { NoteService } from '../service/noteService';

export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  async getNote(req: Request, res: Response) {
    try {
      const noteId = Number(req.params.noteId);

      const data = await this.noteService.getNote(noteId);
      if (!data) return res.status(404).json({ message: 'Note not found' });

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async getNotes(_: Request, res: Response) {
    try {
      const data = await this.noteService.getNotes();
      if (data.length === 0) res.status(204).json();

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async createdNotes(req: Request, res: Response) {
    try {
      const data = await this.noteService.createNote(req.body);

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async updatedNotes(req: Request, res: Response) {
    try {
      const noteId = Number(req.params.noteId);
      const data = await this.noteService.updatedNote(noteId, req.body);

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async deletedNotes(req: Request, res: Response) {
    try {
      const noteId = Number(req.params.noteId);
      const data = await this.noteService.deleteNote(noteId);

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
