import { Router } from 'express'
const router = Router();

import { saveBackend } from '../controllers/backend.controller'

// Routes
router.post('/sumar/:sumando01/:sumando02', saveBackend);

export default router;
