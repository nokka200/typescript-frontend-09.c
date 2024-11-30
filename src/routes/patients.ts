import express from 'express';
import patientService from '../services/patientService';
import { Response } from 'express';
import { PatientEntry } from '../types';

const router = express.Router();

router.get('/', (_req, res: Response<PatientEntry[]>) => {
    res.send(patientService.getNonSensitivePatients());
});

export default router;