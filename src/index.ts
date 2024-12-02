import express from 'express';
import patientRouter from './routes/patients';
import diagnossesService from './routes/diagnosess';
import cors from 'cors';
const app = express();
const PORT = 3001;
const FRONT_END_PORT = 5173;

app.use(cors(
  {
    origin: `http://localhost:${FRONT_END_PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }
));
app.use(express.json());



app.use('/api/patients', patientRouter);
app.use('/api/diagnoses', diagnossesService);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});