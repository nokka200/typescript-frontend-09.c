import { NonSensitivePatient } from "../types";
import patientEntries from "../../data/patient";

const getNonSensitivePatients = (): NonSensitivePatient[] => {
  return patientEntries.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};


export default {
    getNonSensitivePatients
};