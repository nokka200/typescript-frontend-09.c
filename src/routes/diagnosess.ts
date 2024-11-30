import express from 'express';
import diagnosesService from '../services/diagnossesService';
import { Response } from 'express';
import { DiagnosesEntry } from '../types';

const router = express.Router();

router.get('/', (_req, res: Response<DiagnosesEntry[]>) => {
    res.send(diagnosesService.getDiagnoses());
});


export default router;