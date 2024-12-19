import { NewPatientEntry } from './types';

const toNewPatient = (object: unknown): NewPatientEntry => {
  if (!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing data');
  }

  const newPatient: NewPatientEntry = {
    name: 'naama',
    gender: 'male',
    occupation: 'doctor',
    dateOfBirth: '1990-01-01',
  };

  return newPatient;
};

export { toNewPatient };
