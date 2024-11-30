import express from 'express';
import patientRouter from './routes/patients';
import diagnossesService from './routes/diagnosess';
const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/api/patients', patientRouter);
app.use('/api/diagnoses', diagnossesService);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});