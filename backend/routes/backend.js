import { Router } from 'express'
const router = Router();

import { saveBackend } from '../controllers/backend.controller'

// Routes
router.post('/suma/:valor1/:valor2', saveBackend);

export default router;
