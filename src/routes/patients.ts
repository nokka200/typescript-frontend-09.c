import express from 'express';
import patientService from '../services/patientService';
import { Response } from 'express';
import { PatientEntry } from '../types';
import { v1 as uuid } from 'uuid';

const router = express.Router();

router.get('/', (_req, res: Response<PatientEntry[]>) => {
  res.send(patientService.getNonSensitivePatients());
});

router.post('/', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
  const id: string = uuid();
  console.log(req.body);
  res.send(id);
});

export default router;
