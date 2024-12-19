export type Gender = 'male' | 'female' | 'other';
export type NonSensitivePatient = Omit<PatientEntry, 'ssn'>;
export type NewPatientEntry = Omit<PatientEntry, 'id'>;

export interface PatientEntry {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn?: string;
  gender: Gender;
  occupation: string;
}

export interface DiagnosesEntry {
  code: string;
  name: string;
  latin?: string;
}
