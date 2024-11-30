import { NonSensitivePatient } from "../types";
import patientEntries from "../../data/patient";

const getNonSensitivePatients = (): NonSensitivePatient[] => {
  return patientEntries;
};


export default {
    getNonSensitivePatients
};