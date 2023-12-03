import { Router } from 'express';
import { minLength, number, object, parse, string, ValiError } from 'valibot';
import { NoteController } from '../../controller/noteController';
import { NoteUseCase } from '../../domain/noteUsecase';
import { NoteRepositoryImpl } from '../../infrastructure/noteRepositoryImpl';
import { NoteService } from '../../service/noteService';

const router = Router();

const noteRepo = new NoteRepositoryImpl();
const noteUseCase = new NoteUseCase(noteRepo);
const noteService = new NoteService(noteUseCase);
const noteController = new NoteController(noteService);

const noteSchema = object({
  title: string([
    minLength(1, 'Please enter title'),
    minLength(6, 'The minimum length must be 6 characters'),
  ]),
  description: string([
    minLength(1, 'Please enter description'),
    minLength(6, 'The minimum length must be 6 characters'),
  ]),
  noteStateId: number(),
});

router.get('/noteStates', (req, res) => {
  noteController.getNoteStates(req, res);
});

router.get('/:noteId', (req, res) => {
  noteController.getNote(req, res);
});

router.get('/', (req, res) => {
  noteController.getNotes(req, res);
});

router.post('/', (req, res) => {
  try {
    parse(noteSchema, req.body);
    return noteController.createdNotes(req, res);
  } catch (error) {
    if (error instanceof ValiError) {
      const input = error.issues[0].path![0].key;
      const message = `${error.message} in ${input}`;

      return res.status(400).json({ message });
    }
    const err = error as Error;
    return res.status(500).json({ message: err.message });
  }
});

router.put('/:noteId', (req, res) => {
  noteController.updatedNotes(req, res);
});

router.delete('/:noteId', (req, res) => {
  noteController.deletedNotes(req, res);
});

export default router;
