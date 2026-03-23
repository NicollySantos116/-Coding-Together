import express from 'express';
import * as controller from '../controllers/fotoController.js';

const router = express.Router();

router.post('/:id/foto', controller.uploadFoto);
router.get('/:id/foto', controller.verFoto);

export default router;
