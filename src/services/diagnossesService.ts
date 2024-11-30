import { DiagnosesEntry } from "../types";
import diagnosesEntries from "../../data/diagnoses";

const getDiagnoses = (): DiagnosesEntry[] => {
    return diagnosesEntries;
};

export default {
    getDiagnoses
};