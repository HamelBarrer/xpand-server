import { Router } from 'express';
import { NoteController } from '../../controller/noteController';
import { NoteUseCase } from '../../domain/noteUsecase';
import { NoteRepositoryImpl } from '../../infrastructure/noteRepositoryImpl';
import { NoteService } from '../../service/noteService';

const router = Router();

const noteRepo = new NoteRepositoryImpl();
const noteUseCase = new NoteUseCase(noteRepo);
const noteService = new NoteService(noteUseCase);
const noteController = new NoteController(noteService);

router.get('/:noteId', (req, res) => {
  noteController.getNote(req, res);
});

router.get('/', (req, res) => {
  noteController.getNotes(req, res);
});

router.post('/', (req, res) => {
  noteController.createdNotes(req, res);
});

router.put('/:noteId', (req, res) => {
  noteController.updatedNotes(req, res);
});

router.delete('/:noteId', (req, res) => {
  noteController.deletedNotes(req, res);
});

export default router;
